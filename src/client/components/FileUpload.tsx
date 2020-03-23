import React from 'react';
import axios from 'axios';
import fs from 'fs';

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }


  handleSubmit(e) {
    e.preventDefault();
    const file = this.fileInput.current.files[0];
    axios.post('/api/upload', file)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload Your CSV File:
          <input type="file" ref={this.fileInput}/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}


export default FileUpload;
