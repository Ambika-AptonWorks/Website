import React from 'react'
import './display.css'

const Display=({days,hours,seconds,minutes})=> {
  return (
    <div>
        <h3 className=' mt-3 '>Sales Ends in</h3>
        <table>
            <tbody className='tablecont'>
                <tr>
                    <th>{days} Days:</th>
                    <th>{hours} Hrs:</th>
                    <th>{minutes} Min:</th>
                    <th>{seconds} Sec</th>
                </tr>
                
            </tbody>


        </table>
    </div>
  )
}

export default Display