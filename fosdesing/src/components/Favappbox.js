import React from 'react'
import '../Css/iconsImages.css'
import { Link } from 'react-router-dom'

function Favappbox(){
    return(
        <div className='box'>
            <h3>My App´s</h3>
            <Link to="/Terminal" className='terminal'>/>²</Link>
            <Link to='/Home'><div className='closerBt closerBoxBt'></div></Link>
        </div>
    )
}

export default Favappbox