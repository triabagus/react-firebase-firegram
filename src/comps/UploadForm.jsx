import React, { useState } from 'react';

const UploadForm = () => { 
    // State
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // Validation file image
    const types = ['image/png', 'image/jpeg'];

    // Function Change Image
    const changeHandlerImage = (e) => { 
        let selected = e.target.files[0];

        // Conditions file image upload from computer
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else { 
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandlerImage} />
                <span>+</span>
            </label>

            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    );
}

export default UploadForm;