import profilepic from '../profile.jpg'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const About = () => {
  return (
    <div className='about-me-page'>
        <img src={profilepic} alt="Profile Picture" className='picture'/>
        <h1><font size="7">Sahil Patel</font></h1>
        <div className='basic-info'> </div>
       
        <h3>University Of Bristol</h3>
        <h3>Mechanical and Electrical Engineer</h3>
        
        <div className='basic-info'></div>
        
        
        <p style ={{paddingLeft: "1em",paddingRight:"1em", textAlign: "center"}}> <font size="4">This website was created due to my passion for software development. Please check out my socials and CV below:</font></p>

        
        
        <div style ={{display:"flex", padding: "1em", paddingTop:"1.5em"}}>
            <a href = "https://www.linkedin.com/in/sahil-patel-20a8a0198/" title="LinkedIn" className='icon-link'><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
            <hr />
            <a href ="https://github.com/onlysilvercrow" title="Github" className = "icon-link"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
            <hr />
            <a href ="Sahil-CV.pdf" download="Sahil-CV.pdf" title="Download CV" className = "icon-link"><FontAwesomeIcon icon={faFile} className="icon" /></a>
        </div>
    </div>
  )
}

export default About