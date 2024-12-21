import React, { useState } from 'react'
import './header.css'
import avatar from '../../assets/avatar.jpeg'
import Button from '../Button/Button'
import { AiFillInstagram, AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { GiCat } from 'react-icons/gi'
import { FaCat } from 'react-icons/fa'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

function Header() {
  const [cat, setCat] = useState(true)

  const cvLink = '/CV-PHAM-MINH-NHUT.pdf'
  return (
    <section className='main_section header' id='home'>

      <div className='header_welcome'>
        <span>Hello! I'm a <br/>Fullstack Developer</span>
        <div className='header_name'>
          <span style={{ '--i': '1' }} className='letter'>P</span>
          <span style={{ '--i': '2' }} className='letter'>H</span>
          <span style={{ '--i': '3' }} className='letter'>A</span>
          <span style={{ '--i': '4' }} className='letter'>M</span>
          <span> </span>
          <span style={{ '--i': '7' }} className='letter'>M</span>
          <span style={{ '--i': '8' }} className='letter'>I</span>
          <span style={{ '--i': '9' }} className='letter'>N</span>
          <span style={{ '--i': '10' }} className='letter'>H</span>
          <span> </span>
          <span style={{ '--i': '11' }} className='letter'>N</span>
          <span style={{ '--i': '12' }} className='letter'>H</span>
          <span style={{ '--i': '13' }} className='letter'>U</span>
          <span style={{ '--i': '14' }} className='letter'>T</span>
        </div>
        <div className='header_welcome-quote'>
          <div>
            <RiDoubleQuotesL />
          </div>
          What you are doing in your free time will define you!
          <div>
            <RiDoubleQuotesR />
          </div>
        </div>
      </div>

      <div className='header_info'>
        <div className='header_info-avatar'>
          <img src={avatar}></img>
        </div>
        <div className='header_info-button'>
          <Button btnStyle='outline' btnText='Download CV' btnLink={cvLink} download />
          <Button btnStyle='primary' btnText="Let' Talk" btnLink='#contact' />
        </div>
      </div>

      <div className='header_socials'>
        <a href='#' target='_blank'><AiFillInstagram /></a>
        <a href='https://www.facebook.com/minh.nhut.905279/' target='_blank'><BsFacebook /></a>
        <a href='#' target='_blank'><AiFillGithub /></a>
        <a href='https://www.linkedin.com/feed' target='_blank'><AiOutlineLinkedin/></a>
      </div>

      {/* Sub */}
      <div className='header_welcome-cat'>
        {cat ? <GiCat onClick={() => setCat(false)} /> : <FaCat onClick={() => setCat(true)} />}
      </div>

      <div className='header_frame'>
        <div></div>
        <div></div>
      </div>

      <div className='header_scrolldown'><a href='#footer'>ScrollDown</a></div>


    </section>
  )
}

export default Header
