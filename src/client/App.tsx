import React from 'react';
import axios from 'axios';
import TransactionList from './components/TransactionList';
import BugetCategoryList from './components/BugetCategoryList';
import AddCategory from './components/AddCategory';
import FileUpload from './components/FileUpload';
import { trans, cate } from './demoData';

interface State {
  transactions: Array<object>
}


class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      transactions: trans
    }
    this.handleFileSubmit = this.handleFileSubmit.bind(this)
  }

  handleFileSubmit(file: File) {
    const formData = new FormData();

    formData.append('fin', file);
    axios({
      url: '/api/upload',
      method: 'POST',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log('success', res);
        this.setState({
          transactions: res.data
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Smart Wallet</h1>
        <FileUpload handleFileSubmit={this.handleFileSubmit}/>
        <div className="app">
          <TransactionList transList={this.state.transactions}/>
        </div>
        <div className="category">
          <h3>Budget Categories</h3>
          <BugetCategoryList />
          <AddCategory />
        </div>
      </div>
    )
  }
}

export default App;

// interface Record {
//   amount: string,
//   createdAt: string,
//   date: string,
//   description: string,
//   id: number,
//   updatedAt: string,
// }
