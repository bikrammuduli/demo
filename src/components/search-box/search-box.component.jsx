import React from 'react';


export const SearchBox = (props) => (
    <input name='searchField' className="search-box" onChange={props.onSearchChange} type="search" placeholder="search monsters" />
)
