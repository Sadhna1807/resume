// rafce
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt=''/>
    </div>
  <div className='about-sections'>
    <div className='about-left'>
        <img src={profile_img} alt=''/>
    </div>
    <div className='about-right'>
        <div className='about-para'>
            <p>
I am a 3rd year Information Technology student with a strong interest in
Frontend Development and Data Structures & Algorithms.</p>
<p> I enjoy
building responsive web applications and continuously learning
new technologies to improve my skills.
</p>
        </div>
        <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width: "50%"}}></hr></div>
             <div className='about-skill'><p>JavaScript</p><hr style={{width: "70%"}}></hr></div>
              <div className='about-skill'><p>React JS</p><hr style={{width: "60%"}}></hr></div>
              <div className='about-skill'><p> CS Fundamentals(DBMS,OS,CN,OOPS)</p><hr style={{width: "50%"}}></hr></div>

               
        </div>
    </div>
  </div>
 <div className='about-achievements'>
    <div className='left'>

       <h1>My Achievements</h1>
</div>
       <div className='right'>
        <ul>
          <li>💻Solved 300+ problems on LeetCode with 1600+ rating</li>
          <li>📚 Completed CS Fundamentals from GFG Nation Killup</li>
          <li>🎉 Shortlisted for Google Girl Hackathon</li>
          <li>⚡ Completed 5+ projects using JavaScript and React</li>
          <li>🏆 Selected for Smart India Hackathon at college level</li>
        </ul>

        
    </div>
 </div>
    </div>
  )
}

export default About
