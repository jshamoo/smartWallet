import React from 'react';
import axios from 'axios';
import $ from 'jquery';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

interface State {
  file: File | null;
}

class FileUpload extends React.Component<{}, State>{
  constructor() {
    super();
    this.state = {
      file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const formData = new FormData();

    formData.append('fin', this.state.file);
    axios({
      url:'/api/upload',
      method: 'POST',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then((res) => console.log('success', res))
      .catch((err) => console.log(err));
  }

  handleFile(e: HTMLInputEvent): void {
    this.setState({file: e.target.files[0]})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <label>
          Upload Your CSV File:
          <input
            type="file"
            accept=".csv"
            onChange={this.handleFile}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default FileUpload;
