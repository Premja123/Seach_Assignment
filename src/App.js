import React, { useState } from 'react';
import './App.css';
import MOCK_DATA from './MOCK_DATA.json';
import {debounce} from 'lodash';
import Highlighter from 'react-highlight-words';

export default function App() {

const [searchItem, setNewItem]=useState('');


const handleText=debounce((text)=>{
setNewItem(text);
},1000);

  return (
    <div className="App">

  <input type="text" className='searchbox'
   placeholder='Search here' 
    onChange={
      (event)=>{handleText(event.target.value);}}
      />


  {MOCK_DATA.filter((val)=>{
   if(val.name.toLowerCase().includes(searchItem.toLowerCase()))
        {
         return val;
       }
  }).map((val,key)=>

  {
    console.log(key);
    return (
    <div className="names" key={key}>

      <p>{val.name}</p>
      
      </div>
      );
  })}
    </div>
  )
}