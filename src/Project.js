import React from 'react'
import './Project.css'
import 'animate.css';
import huddle from './Image/huddle.jpg'
import kudi from './Image/kudi.jpg'
import rugwatrs from './Image/Rugwarts Landing.jpg'
import counter from './Image/counter.jpg'
const Project = () => {
  return (
    <div className='prject-overall'>
      <div className="animate__animated animate__bounce project ">
        <h1>These Are The Projects I Have Completed</h1><hr />
      </div>
      <div className='links'>
        <div>
          <h4>HUDDLE PROJECT</h4>
          <img className='huddle' src={huddle} alt="" />
          <p><a target='_blank' href="https://huddle-made-by-hamskid.netlify.app/">View My Huddle Project</a></p>
        </div>
        <div>
          <h4>KUDI PROJECT</h4>
          <img className='kudi' src={kudi} alt="" />
          <p><a target='_blank' href="https://kudi-project-made-by-hamskid.netlify.app/">View My Kudi Project</a></p>
        </div>
        <div>
          <h4>RUGWARTS PROJRCT</h4>
          <img className='rugwatrs' src={rugwatrs} alt="" />
          <p><a target='_blank' href="https://rugwarts-landing-project-made-by-hamskid.netlify.app/">View My Rugwarts Project</a></p>
        </div>
      </div>
      <div className='name'>
        <div>
          <h4>COUNTER PROJECT</h4>
          <img className='counter' src={counter} alt="" />
          <p><a target='_blank' href="https://counter-by-hamid.netlify.app/">View My Conter Project</a></p>
        </div>
      </div>
    </div>
  )
}

export default Project
