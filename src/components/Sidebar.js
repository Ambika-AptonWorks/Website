import React,{useState} from 'react'
import './Sidebar.css'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import ReactTooltip from 'react-tooltip';

function Sidebar() {
 const[text,setText]=useState(false)

 const handleMouse=()=>{
 
 }
 
  return (
    <>
    <div className='nav'>
      <h3>A</h3></div> 
      <ul>
        <li data-tip="Apps" ><RiIcons.RiAppsFill  /></li>
        <ReactTooltip afterShow={() => { setTimeout(ReactTooltip.hide(), 1000) }}  />
        <li data-tip="Contacts"><IoIcons.IoMdContacts/></li>
        <ReactTooltip />
        <li data-tip="Notifications"><IoIcons.IoMdNotifications/></li>
        <ReactTooltip />
        <li data-tip="Messages"><AiIcons.AiFillMessage/></li>
        <ReactTooltip />
        <li data-tip="Settings"><AiIcons.AiFillSetting onMouseDown={handleMouse}/></li>
        <ReactTooltip />
        <li id="lastIcon" data-tip="Share">< MdIcons.MdSendToMobile/></li>
        <ReactTooltip />
      </ul>
 
    </>
    
  )
}

export default Sidebar