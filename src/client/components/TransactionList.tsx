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
            <th>
              <input type="checkbox"/>
            </th>
            <th><i className="fas fa-redo-alt"></i></th>
          </tr>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.transList.map(record => (
            <tr key={record.id}>
              <td>
                <input type="checkbox"/>
              </td>
              <td>{record.date}</td>
              <td>{record.description}</td>
              <td>$ {record.amount}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default TransactionList;
