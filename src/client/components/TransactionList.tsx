import React from 'react';

interface TransListProps{
  transList: Array<any>;
}

const TransactionList = (props: TransListProps) => {
  return (
    <div>
      Transaction List
    </div>
  )
}

export default TransactionList;

// interface Record {
//   amount: string,
//   createdAt: string,
//   date: string,
//   description: string,
//   id: number,
//   updatedAt: string,
// }
