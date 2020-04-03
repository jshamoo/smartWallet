import React from 'react';

interface SearchBarProps {
  handleTransSearch: Function
}

const SearchBar = (props: SearchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleTransSearch(e.target.value);
  }

  return (
    <div>
      <i className="fas fa-search"></i><input type="search" placeholder="Search transactions" onChangeCapture={e => handleSearch(e)}/>
    </div>
  )
}

export default SearchBar;
