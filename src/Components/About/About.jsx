import React, {useRef, useEffect, useContext} from 'react'
import {topContext} from '../../App'
import './about.css'
import Cat from '../../assets/Cat2.png'

function About() {
  const aboutRef = useRef()
  const value = useContext(topContext)

  useEffect(()=> {
    value[1](state=>{
      state[0].aboutTop = aboutRef.current.offsetTop
      return state
    })
  },[])
  
  return (
    <section className='main_section shadow' id='about'ref={aboutRef}>

      <div className='section_header'>
        <span>Get To Know</span>
        <h3>About Me</h3>
      </div>

      <div className='about_content'>
        <div className='about_content-img'><img src={Cat}/></div>
        <p>
          Welcome to visit my personal Website!<br/> <br/>
          <span>N</span>ame: Pham Minh Nhut <br/>
          <span>B</span>irthday: 10/10/2000.<br/>
          <span>B</span>orn: Ben Tre Province <br/>
          <span>L</span>iving:  HO CHI MINH City, District 12. <br/><br/>
          <span>I</span>'m a student majoring in construction engineering at HO CHI MINH University Of Science and have a longstanding passion for mathematics, design and especially PROGRAMMING .<br />
          <span>M</span>oreover, I'm a CAT lover guy and ... <span>"Never too late to begin!"</span>
        </p>
      </div>
    </section>
  )
}

export default About
