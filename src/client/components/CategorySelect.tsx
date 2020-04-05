import React, { useState } from 'react';

interface Record {
  id: number;
  Date: string,
  Amount: number,
  Description: string,
  Category: string,
  [key: string]: string | number
}

interface Category {
  id: number;
  name: string,
  budget: number
}

interface CategorySelectProps {
  record: Record
  cateList: Array<Category>;
  updateCategory: Function;
}

const CategorySelect = (props: CategorySelectProps) => {
  const [selected, setSelected] = useState(props.record.Category);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    const recordIds = [Number(e.target.dataset.recordid)];
    props.updateCategory(e.target.value, recordIds);
  }

  return (
    <select data-recordid={props.record.id} value={selected} onChange={(e) => handleChange(e)}>
      <option value=""> - </option>
      {props.cateList.map((category: Category) =>
        <option key={category.id} value={category.name}>{category.name}</option>
      )}
    </select>
  )
}

export default CategorySelect;
