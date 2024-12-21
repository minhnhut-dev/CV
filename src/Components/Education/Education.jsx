import React, {useRef, useEffect, useContext} from 'react'
import {topContext} from '../../App'
import "./Education.css"
import Edu from '../../assets/education.png'

function Education() {
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
                <h3>Education</h3>
            </div>

            <div className='about_content'>
                <div className='about_content-img'><img src={Edu}/></div>
                <p>
                    Welcome to visit my personal Website!<br/> <br/>
                    <span>N</span>ame: Pham Minh Nhut <br/>
                    <span>B</span>irthday: 10/10/2000.<br/>
                    <span>B</span>orn: Ben Tre Province <br/>
                    <span>L</span>iving:  HO CHI MINH City, District 12. <br/><br/>
                    <span>I</span>'m a student majoring in construction engineering at HO CHI MINH City University of Technology and have a longstanding passion for mathematics, design and especially PROGRAMMING .<br />
                    <span>I</span>'m a SELF-TAUGHT UI developer looking for a beginner position. Hope to be able to learn and gain experience working as a front-end developer oriented to a FULL-STACK developer through many projects. <br /><br/>
                    Also would like to learn and solve difficult problems within a team environment to help a business accelerate and grow.<br />
                    <span>M</span>oreover, I'm a CAT lover guy and ... <span>"Never too late to begin!"</span>
                </p>
            </div>
        </section>
    )
}

export default Education
