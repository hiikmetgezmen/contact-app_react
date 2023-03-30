import React, { useState } from 'react'
import "../style.css"

function List({contacts}) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
    });
    
  return (
    <div>
        <input placeholder='filter' value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
        <ul className='list'> 
       {
         filtered.map((contact, h) => (
            <li key={h}>
              <span> İsim : </span>
            
             <span>{contact.name}</span>  
             <span>Numara : </span>
             <span> {contact.number}</span>
               
               </li>
         ))
        
        }</ul>
    </div>
  )
}

export default List
