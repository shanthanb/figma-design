import React from 'react'
import styles from './Footer.module.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Footer() {
    return (
        <div className={styles['footer-container']} >
           <div>
            <p>About</p>
            <p>Accessibility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Help Center</p>
            <p>Privacy & Terms <ExpandMoreIcon/></p>
            <p>Ad Choices</p>
            <p>Advertising</p>
            <p>Business Services <ExpandMoreIcon/></p>
            <p>Get the LinkedIn App</p>
            <p>...</p>
           </div>
           <hr style={{opacity:"0.3"}}></hr>
           <div>
               <p>Linked  <LinkedInIcon className={styles['Linkedin']} /></p><p>LinkedIn © 2021</p>
           </div>
        </div>
    )
}

export default Footer

