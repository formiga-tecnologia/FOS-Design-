import React from 'react';
import '../../Css/apps/StandartCss.css'
import { Link } from 'react-router-dom'

function StandartApp(){
    return(
        <div className='appWin'>
            <div className='appTitle'>App Standart Title  <Link Link to='/Home'><div class="closerBt terminal-closer"></div></Link></div>
            <div>Hello</div>
        </div>
    );
}

export default StandartApp