import React, { useState } from 'react'
import '../Css/iconsImages.css'
import Terminal from './apps/Terminal'

function Favappbox(){
    const [terminal,setTerminal ] =useState([])  
    let [callApp] = useState(false)
    const OnAddTerminal = event =>{
        console.log("vai")
        if(callApp === false){
            setTerminal(terminal.concat(<Terminal key={terminal.length}/>))
            callApp = true
        }
        else{
            setTerminal(terminal.shift(<Terminal key={terminal.length}/>))
            callApp=false
        }
    }
    return(
        <div className='box'>
            <h3>App´s Favorite</h3>
            <a href="/#" className='terminal' onClick={OnAddTerminal}> /> </a>
            {terminal}
        </div>
    )
}

export default Favappbox