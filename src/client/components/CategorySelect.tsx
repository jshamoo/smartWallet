import React, { useState } from 'react';

interface Record {
  Date: string,
  Amount: number,
  Description: string,
  Category: string,
  [key: string]: string | number
}

interface Category {
  name: string,
  budget: number
}

interface CategorySelectProps {
  record: Record
  cateList: Array<Category>
}

const CategorySelect = (props: CategorySelectProps) => {
  const [selected, setSelected] = useState(props.record.Category);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
  }

  return (
    <select value={selected} onChange={(e) => handleChange(e)}>
      <option value=""> - </option>
      {props.cateList.map((category: Category, index: number) =>
        <option key={index} value={category.name}>{category.name}</option>
      )}
    </select>
  )
}

export default CategorySelect;
