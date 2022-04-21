import React,{useState }from 'react'
import './Rightbar.css'

function Rightbar() {
    const[name,setName]=useState("Mark Zukerberg")
    const[job,setJob]=useState("FaceBook Founder")
    const[about,setAbout]=useState("Face, brought grass let his called brought man. Can't grass. First doesn't, green life firmament winged him second, cattle creature above upon itself waters have moved. Itself creepeth that green life firmament winged him second.") 
    return(
    <div className='card'>
        <div className='upper-container'>
            <div className='image-container' >
                <img src="https://th.bing.com/th/id/OIP.plQhPDguapHBSz9y_CiW4AHaHX?w=181&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" height="100px" width="100px"/>
            </div>
        </div>
        <div className='lower-container'>
            <h2>{name}</h2>
            <h4>{job}</h4>
            <p>{about}</p>
            <button type="button" >Visit Profile</button>
        </div>
    </div>
  )
}

export default Rightbar