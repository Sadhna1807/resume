import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div>
      <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
         <h1>Hi,<span>I'm Sadhna Kumari</span>  👋</h1>
      <p>3rd Year Information Technology Student | Frontend Developer | DSA Enthusiast</p>
      <div className="Hero-action">
        <div className="Hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='Hero-resume'>
          <a href="/resume.pdf.pdf"target='_blank' rel='noopener norefferer'>My resume
            </a>
            </div>
      </div>
      </div>

    </div>
  )
}

export default Hero
