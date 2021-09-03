import React from 'react'
import styles from './Head.module.scss';
import icons from '../../../../Data/Data.json'
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
function Head() {
    return (
        <>
            <div className={styles['head-container']}>
                <div className={styles['back-img']} ></div>
                <div>
                    <div><img src={icons.Icons.figma} /></div>
                    <p>Figma</p>
                    <p>A design platform for teams who build products together.</p>
                    <p>Design &nbsp;•&nbsp; San Francisco,&nbsp;CA&nbsp; • &nbsp; 101,282 followers</p>
                    <a href='#'>See all 358 employes on LinkedIn <ArrowForwardIcon/></a>
                    <div className={styles['btns']} ><button><VisibilityIcon fontSize="small" /><p>+</p>Follow</button><button><ExitToAppOutlinedIcon/>Visit Website</button><button><p>...</p></button></div>

                </div>
            </div>
        </>
    )
}

export default Head;
