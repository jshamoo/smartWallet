import React, {useState, useEffect} from 'react';
import CategorySelect from './CategorySelect';

interface TransListProps {
  transList: Array<any>;
  cateList: Array<any>;
  handleSort(e: React.MouseEvent<HTMLElement>): void;
  updateCategory: Function;
}


const TransactionList = (props: TransListProps) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [category, setCategory] = useState(null);
  const [checkedIds, setCheckedIds] = useState([])

  const handleCheckedAll = () => {
    setCheckedAll(!checkedAll);
  }

  useEffect(() => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    // console.log('checkboxes', checkboxes)
    const updatedCheckedIds = [];
    for (let i = 1; i < checkboxes.length; i++) {
      let checkbox = checkboxes[i] as HTMLInputElement;
      checkbox.checked = checkedAll;
      updatedCheckedIds.push(Number(checkbox.id));
    }
    // console.log(updatedCheckedIds);
    setCheckedIds(updatedCheckedIds);
  }, [checkedAll]);

  const updateCategoryAtOnce = () => {
    if (checkedAll && category) {
      props.updateCategory(category, checkedIds)
    }
  }

  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className="table">
        <div className="table-header" onClick={(e) => props.handleSort(e)} >
          <input id="selectAll" type="checkbox" onChange={handleCheckedAll} />
          <div>Date</div>
          <div>Description</div>
          <div>Amount</div>
          <div>Category</div>
        </div>
        { checkedAll &&
          <div>
            <input
              className="category-input"
              type="text"
              placeholder="Enter a category for all selected items"
              onChange={e => setCategory(e.target.value)}
            />
          <button onClick={updateCategoryAtOnce}>Update All</button>
          </div>
        }
        <div className="table-content">
          {props.transList.map((record) => (
            <div className="record" key={record.id}>
              <input id={record.id} type="checkbox" />
              <div>{record.Date}</div>
              <div>{record.Description}</div>
              <div>$ {record.Amount}</div>
              <CategorySelect record={record} cateList={props.cateList} updateCategory={props.updateCategory}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TransactionList;
