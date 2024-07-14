import React from 'react';
import './intro.css';
import introimg from '../../assets/image.png';
import hiremeimg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
     <div className="introcontent">
      
        <span className="hellow">Helllow, </span>
        <span className="introtext">I'am <span className="introname">Subhi</span><br/>
        React Developer</span>
        <p className="intropara">fdbjhgbdhfsdfvhid mdchsgdufgv jdbfchguf<br/> dfcgeuygft hdfeyugeuyfgtu</p>
        <Link><button className="btn"><img src={hiremeimg} alt="" className="btnimg" />Hire Me</button></Link>
     </div>
     <img src={introimg} alt="" className="bg" />
    </section>
  )
}

export default Intro
