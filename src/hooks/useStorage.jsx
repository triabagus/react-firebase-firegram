import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';

// ! Hook hanyalah cara untuk membuat code yang minimalis dimana dapat digunakan kembali dan kemudian kait itu dapat digunakan dalam component apapun yang membutuhkannya

const useStorage = (file) => { 
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            // Formula for file upload percentage byte
            let percentage = (snap.bytesTransferred / snap.totalBytes * 100);
            setProgress(percentage);
        }, (err) => { 
            setError(err);
        }, async () => { 
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
                
            collectionRef.add({ url, createdAt });
            setUrl(url);    
        });
    
    }, [file]);

    return { progress, url, error };
}

export default useStorage;