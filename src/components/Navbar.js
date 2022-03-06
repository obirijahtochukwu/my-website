import React, { useState } from 'react';
import links from '../data';

export default function Navbar() {

  const [hash, setHash] = useState('#');
  window.location.hash = hash;

  return (
    <div className='desktop container-fluid'>
      <div className="navbar p-3">
        <i>arnowlogi</i>    
        <span>
          {links.map((link)=>{
            const {id, url, text } = link;
            return (
              <a key={id} href={url} onClick={()=> setHash(url)} className={`navbar-link p-3 mx-1 ${hash === url && 'active'}`}>{text}</a>
            )
          })}
        </span>
      </div>
    </div>
  )
}
