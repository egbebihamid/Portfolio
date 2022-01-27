import React from 'react'
import './About.css'
import 'animate.css';
const About = () => {
  return (
    <div className='about'>
      <div className="animate__animated animate__bounce about-me">
        <h1>About Me</h1><hr />
      </div>
      <div className='about-text'>
          <h5>ALLOW ME TO INTRODUCE MYSELF.</h5>
          <p>I'm obsessed with making things and even more obsessed with making
          things better.  I've been in
          the business of creating since l hung my first
          painting on the tripe when I was 3.  Aher graduating from the . Tech Studio  Academy
          I've been
          actively involved in the wet design community for
          the last 1 years.   Ive designed websites for small businesses,
          corporations, nonprofits, churches, musicians and more, I also started a
          design blog, Visual
          whete I share inspiration, tutorials, and
          resources.
          My specialty is Front-end web design and development, making pixel
          magic in photoshop and turning it into beautiful, semantic HTML & CSS.
          My interests, however, eudend beyond the web and I love helping people
          with branding, print design and marketing strategy, I even love making.</p>
      </div>
    </div>
  )
}

export default About
