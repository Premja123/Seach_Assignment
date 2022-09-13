
import React, { useState } from 'react';
import './App.css';


function List({data}) {

const [searchItem, setNewItem]=useState([]);
var search_name;
const handleChange=(e)=>{
  search_name=e.target.value;
  const filter=data.filter((value)=>{
    return value.name.toLowerCase().includes(search_name.toLowerCase());
  });

if(search_name===""){
  setNewItem([]);
}else{
  setNewItem(filter);
}

};

  return (
    <div>
  <div className="input_block">
    <input type="search"
    placeholder="Search here"
    onChange={handleChange} />
     </div>

     {searchItem.length>0 &&(
      <div id="searchItem">
        {searchItem.map((value,key)=>{
          return <div key={key}>{value.name}</div>;
        })}
        </div>
     )}
  </div>

  );
}

export default List;

