import React from 'react'
import './Contact.css'
import 'animate.css';
const Contact = () => {
  return (
    <div className='over'>
      <div className="animate__animated animate__bounce contact">
        <h1>CONTACT DETAIL</h1><hr />
      </div>
      <div className='contact-display'>
        <div className='contact-text'>
          <h1>DON'T BE SHY</h1>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <p> <i class="fas fa-phone-alt"></i> CALL ME: 234 8051747368.</p>
          <p> <i class="fas fa-envelope-square"></i> MAIL ME: egbebih@gmail.com.</p>
          <p><i class="fab fa-facebook-square"></i> ON FaceBook: Ayande Egbebi.</p>
          <p><i class="fab fa-instagram-square"></i> ON instagram: hamskid_24.</p>
        </div>
        <div className='input'>
          <form action="https://formspree.io/f/{form_id}" method="post">
            <div>
              <input className='input-name' type="text" placeholder='Enter your Name' />
            </div>
            <div>
              <input className='input-email' type="text" placeholder='Enter a valid email address or Cellphone Number' />
            </div>
            <div>
              <input className='input-message' type="text" placeholder='Enter your message' />
            </div>
            <button  type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
