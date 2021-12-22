import "./App.css";
import {  useState } from "react";
import { useDropzone } from "react-dropzone";

function App() {
    const [files, setFiles] = useState();

    const { getRootProps, getInputProps } = useDropzone({
        accept: ".pdf",
        multiple: false,
        maxFiles: 1,
        maxSize: 50000000,
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles);
            setFiles(acceptedFiles);
        },
    });

    console.log(files);

    return (
        <div className="files">
            <div className="files-dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <p>{files && files[0]?.name}</p>
            </div>
        </div>
    );
}

export default App;
