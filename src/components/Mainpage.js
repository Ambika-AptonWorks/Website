import React from 'react'
import './Mainpage.css'
import * as FaIcons from 'react-icons/fa'
import Photosgallery from './Photosgallery'
import Coundown from './Coundown'

function Mainpage() {
  return (
    <>
      <div id="content">
        <div className='main d-flex' >
          <h5 className='mt-3'>Hello :)</h5>
          <form className="d-flex" id="search">
            <input type="text" placeholder="Search" aria-label="Search" />
            <FaIcons.FaSearch id="search1" />
          </form>
        </div>
        <hr/>
        <Coundown/>
        <hr/>
       <Photosgallery/>
      </div>

    </>
  )
}

export default Mainpage