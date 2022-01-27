import React from 'react'
import './Services.css'
import 'animate.css';
import web from './Image/weblogo1.png'
const Services = () => {
  return (
    <div className='serivces-overall'>
      <div className="animate__animated animate__bounce services">
        <h1>My Services</h1><hr />
      </div>
      <div className='serivces-text'>
        <div className='pic1'>
          <img className='web' src={web} alt="" />
          <h4>Website Development</h4>
          <p>
            I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.
          </p>
          <p>
            I make sure your website is performing its best by thoroughly reviewing it before making any changes.I look for potential issues a user might face,big or small,and make suggestions about how imoprovement could be made to fix that, ensuring your user is always on the right path to achieve their goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
