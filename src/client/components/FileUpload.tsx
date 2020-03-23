import React from 'react';
import axios from 'axios';
import $ from 'jquery';

interface FileUploadProps {

}

class FileUpload extends React.Component {
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: FileUploadProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const files = this.fileInput.current.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('fin', files[i]);
    }

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

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data">
        <label>
          Upload Your CSV File:
          <input
            type="file"
            ref={this.fileInput}
            accept=".csv"
            multiple={true}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default FileUpload;
