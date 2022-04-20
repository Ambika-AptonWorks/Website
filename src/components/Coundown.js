import React,{useState,useEffect} from 'react'
import Display from './Display';

const Coundown=()=> {
    const endTime=new Date('April 23, 2022 00:00:00').getTime();
    const[currentTime,setCurrentTime]=useState(new Date().getTime());
    const gap=endTime-currentTime;

    const seconds=1000;
    const minutes=seconds*60;
    const hours=minutes*60;
    const days=hours*24;

    const remainigDays=Math.floor(gap/days);
    const remainingHours=Math.floor((gap % days)/hours);
    const remainingMinutes=Math.floor((gap % hours)/minutes);
    const remainingSeconds=Math.floor((gap % minutes)/seconds)

    useEffect(()=>{
        setTimeout(()=>setCurrentTime(new Date().getTime()),1000);
    },[currentTime])
  return (
    <center>
        <Display  days={remainigDays}
        hours={remainingHours}  minutes={remainingMinutes}
        seconds={remainingSeconds}
        />
    </center>
  )
}

export default Coundown