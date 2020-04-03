import React, { useState } from 'react';
import axios from 'axios';
import TransactionList from './components/TransactionList';
import BugetCategoryList from './components/BugetCategoryList';
import AddCategory from './components/AddCategory';
import FileUpload from './components/FileUpload';
import SearchBar from './components/SearchBar';
import { trans, cate } from './demoData';

interface Record {
  Date: string,
  Amount: number,
  Description: string,
  Category: string,
  [key: string]: string | number
}

interface State {
  transactions: Array<Record>
}


const App = () => {
  const [transactions, setTransactions] = useState(trans);
  const [filteredTrans, setFilteredTrans] = useState(transactions)
  const [direction, setDirection] = useState(1);

  function handleFileSubmit(file: File) {
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
        setTransactions(res.data)
      })
      .catch((err) => console.log(err));
  }

  function handleSort(e: React.MouseEvent<HTMLElement>) {
    setDirection(-direction);
    const sortBy = e.target.innerText;
    // because sort is in place, we must make a copy first, otherwise it is not considered to be a new state
    setFilteredTrans([...filteredTrans]
      .sort((a: Record, b: Record) =>
        a[sortBy] > b[sortBy] ? direction : -direction)
    );


  }

  function handleTransSearch(keyword: string) {
    const regex = new RegExp(keyword, 'gi');
    setFilteredTrans(transactions.filter((a: Record) => a.Description.match(regex)));
  }

  return (
    <div>
      <h1>Smart Wallet</h1>
      <FileUpload handleFileSubmit={handleFileSubmit}/>
      <SearchBar handleTransSearch={handleTransSearch}/>
      <TransactionList transList={filteredTrans} handleSort={handleSort}/>
      <div className="category">
        <h3>Budget Categories</h3>
        <BugetCategoryList />
        <AddCategory />
      </div>
    </div>
  )

}

export default App;

//
