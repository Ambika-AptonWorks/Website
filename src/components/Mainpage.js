import React from 'react'
import './Mainpage.css'
import * as FaIcons from 'react-icons/fa'

function Mainpage() {
  return (
    <>
    <div className='main d-flex'>
    <h5 className='mt-3'>Hello,Ambika</h5>
      <form className="d-flex" id="search">
        <input type="text"  placeholder="Search" aria-label="Search"/> 
        <button className='btn outline:none'><FaIcons.FaSearch /></button>
      </form>
    </div>
    <p>The amazing collections you can get here..</p>
    </>
  )
}

export default Mainpage