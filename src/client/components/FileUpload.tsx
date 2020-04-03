import React, { useState } from 'react';

interface State {
  file: File | null;
}

interface FileUploadProps {
  handleFileSubmit: Function
}

const FileUpload = (props: FileUploadProps) => {
  const [file, setFile] = useState(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submiting event', e)
    props.handleFileSubmit(file)
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
      <label>
        Upload Your CSV File:
        <br />
        <input
          type="file"
          accept=".csv"
          onChange={(e) => handleFile(e)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )

}


export default FileUpload;
