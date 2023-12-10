import React, { useRef, useEffect, useContext } from 'react'
import { topContext } from '../../App'
import './skill.css'
import Card from './Card'

import { SiDocker, SiRubyonrails, SiCircleci} from 'react-icons/si'
import { RiReactjsFill } from 'react-icons/ri'
import { BsGit } from 'react-icons/bs'
import { TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { TbBrandNextjs } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const skills = ['Ruby on rails', 'Reactjs', 'NextJS', 'Git', 'Typescript', 'Redux', 'CI/CD', 'Docker', 'Deployment']
const skillsColor = ['#e34f26', '#1b73ba', '#e9ca32', '#61dafb', '#e84d31', '#f2f2f2', '#45a7e1', '#2f74c0', '#7347b6', '#f68410', '#f2d96b', '#a31d23', '#ea901d',]

const htmlCom = function (index) {
  const ruby_on_rails = <SiRubyonrails />
  const nextjs = <TbBrandNextjs />
  const react = <RiReactjsFill />
  const git = <BsGit />
  const typescript = <TbBrandTypescript />
  const redux = <TbBrandRedux />
  const ci_cd = <SiCircleci />
  const docker = < SiDocker />
  const deploy = <AiOutlineDeploymentUnit />
  const skillsIcon = [ruby_on_rails, react, nextjs,  git, typescript, redux, ci_cd, docker, deploy]
  return skillsIcon[index]
}

function Skill() {

  const skillRef = useRef()
  const value = useContext(topContext)

  useEffect(() => {
    value[1](state => {
      state[0].skillTop = skillRef.current.offsetTop
      return state
    })
  }, [])

  return (
    <section className='main_section shadow' id='skills' ref={skillRef}>

      <div className='section_header'>
        <span>What i have ?</span>
        <h3>Skills</h3>
      </div>

      <div className="skills_container">
        {skills.map((skill, index) => {
          return <Card key={index} cardColor={skillsColor[index]} cardIcon={htmlCom(index)} cardName={skill} />
        })}
      </div>
    </section>
  )
}

export default Skill
