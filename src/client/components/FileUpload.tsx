import React from 'react';
import axios from 'axios';

interface State {
  file: File | null;
}

interface FileUploadProps {
  handleFileSubmit: Function
}

class FileUpload extends React.Component<FileUploadProps, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.handleFileSubmit(this.state.file)
  }

  handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ file: e.target.files[0] })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data">
        <label>
          Upload Your CSV File:
          <input
            type="file"
            accept=".csv"
            onChange={(e) => this.handleFile(e)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default FileUpload;
