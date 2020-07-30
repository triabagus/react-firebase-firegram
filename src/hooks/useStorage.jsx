import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

// ! Hook hanyalah cara untuk membuat code yang minimalis dimana dapat digunakan kembali dan kemudian kait itu dapat digunakan dalam component apapun yang membutuhkannya

const useStorage = (file) => { 
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('stage_changed', (snap) => {
            // Formula for file upload percentage byte
            let percentage = (snap.bytesTransferred / snap.totalBytes * 100);
            setProgress(percentage);
        }, (err) => { 
            setError(err);
        }, async () => { 
            const url = await storageRef.getDownloadURL();
            setUrl(url);    
        });
    
    }, [file]);

    return { progress, url, error };
}

export default useStorage;