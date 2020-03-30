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
          {props.transList.map((record, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox"/>
              </td>
              <td>{record.Date}</td>
              <td>{record.Description}</td>
              <td>$ {record.Amount}</td>
              <td>{record.Category}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default TransactionList;
