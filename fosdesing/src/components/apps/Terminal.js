import React from 'react'
import '../../Css/apps/terminal.css'
import { Link } from 'react-router-dom'

function Terminal(){

    return(
        <div className="terminal-app">
            <div className="terminal-app-title">Terminal Formiga App <Link Link to='/Home'><div class="closerBt terminal-closer"></div></Link></div>
            <div className="anim-typewriter">Welcome to Formiga Terminal 0.0.1 <br/>Happy coding</div>
            <input type="text" className="inputChanges"></input>
        </div>
    )
}

export default Terminal