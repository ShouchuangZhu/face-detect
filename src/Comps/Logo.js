import React from 'react'
import Tilt from 'react-tilt'
import mind from './mind.png'
const Logo = () =>{
    return (
        <div className = 'ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"> 
        <img style={{paddingTop:'25px', width: '70%', height: 'auto'}}alt='logo' src ={mind}></img>
        </div>
        </Tilt>
        </div>
    );
}

export default Logo;