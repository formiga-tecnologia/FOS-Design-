import React from 'react'


function Explorebar(){
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let timer=h+':'+m+':'+s

    return(
        <div className='bar-static'>
            <ul>
                <li>Logo ID</li>
                <li>My explore</li>
                <li>Apps</li>
                <li>Suport</li>
            </ul>
            <div className='statusTime' id='time'>
                {timer}
            </div>
        </div>
    )
}

export default Explorebar