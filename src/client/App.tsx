import React from 'react';
import axios from 'axios';
import TransactionList from './components/TransactionList';
import BugetCategoryList from './components/BugetCategoryList';
import AddCategory from './components/AddCategory';
import FileUpload from './components/FileUpload';
import { trans, cate } from './demoData';

interface State {
  transactions: Array<Record>
}

interface Record {
  Date: string,
  Amount: number,
  Description: string,
  Category: string
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      transactions: trans
    }
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
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
        console.log('success res data', res.data);
        this.setState({
          transactions: res.data
        })
      })
      .catch((err) => console.log(err));
  }

  handleSort() {
    this.setState({
        transactions: this.state.transactions.sort((a: Record, b: Record) => a.Amount - b.Amount)
      });
  }

  render() {
    return (
      <div>
        <h1>Smart Wallet</h1>
        <FileUpload handleFileSubmit={this.handleFileSubmit}/>
        <div className="app">
          <TransactionList transList={this.state.transactions} handleSort={this.handleSort}/>
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

//
