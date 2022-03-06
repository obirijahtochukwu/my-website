import React, { useState } from 'react';
import links from '../data';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';


export default function Sidebar() {

 const [sidebar, setSideber] = useState(false);

 const openSidebar = () =>{
  setSideber(true);
 };

  const closeSidebar = () =>{
    setSideber(false);
  };

  const [hash, setHash] = useState('#');
  window.location.hash = hash;

  return (
    <>
      <div className="sidebar container-fluid">
        <div className="sidebarheader py-2">
          <i style={{textTransform:'uppercase', fontWeight: 'bolder'}}>Arnowlogi </i>
          <span className='d-flex align-items-center'>
            <div className="call mx-3 my-2 p-2 d-flex align-items-center">
              <a href="tel:+2349131772550">
                <FaPhoneAlt className='phone-icon mx-1'/>
              </a>
            </div>
            <FaBars className='bar' onClick={openSidebar}/>
          </span>      
        </div>
      </div>
      <div className={sidebar ? 'modal-wrapper show' : 'modal-wrapper'}>
        <div className="modal-content">
          <button className="closebtn" onClick={closeSidebar}>❌</button>
          {links.map((link)=>{
            const {id, url, text} = link;
            return (
              <div key={id} className="link" onClick={closeSidebar}>
                <a href={url} onClick={()=> setHash(url)} className={`a ${hash === url && 'sb-active'}`}>{text}</a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}