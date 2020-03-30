import React from 'react';

interface TransListProps{
  transList: Array<any>;
}

const TransactionList = (props: TransListProps) => {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.transList.map(record => (
            <tr className="t-records" key={record.id}>
              <td>{record.date}</td>
              <td>{record.description}</td>
              <td>{record.amount}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default TransactionList;
