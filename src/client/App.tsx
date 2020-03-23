import React from 'react';
// import TransactionList from './components/TransactionList';
// import BugetCategoryList from './components/BugetCategoryList';
// import AddCategory from './components/AddCategory';
import FileUpload from './components/FileUpload';



class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Smart Wallet</h1>
        <FileUpload />
        {/* <div className="app">
          <TransactionList />
        </div>
        <div className="category">
          <h3>Budget Categories</h3>
          <BugetCategoryList />
          <AddCategory />
        </div> */}
      </div>
    )
  }
}

export default App;


// interface Category {
//   budget: string,
//   createdAt: string,
//   id: number,
//   name: string,
//   updatedAt: string,
// }

// interface Record {
//   Category: Category,
//   CategoryId: number,
//   amount: string,
//   createdAt: string,
//   date: string,
//   description: string,
//   id: number,
//   updatedAt: string,
// }

// const trans: Array<Record> = [];
// const categories: Array<Category> = [];
