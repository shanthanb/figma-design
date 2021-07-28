import React, { useState } from 'react'
import styles from './Details.module.scss';
function Details() {
    const [tab, setTabs] = useState(0);
    return (
        <>
            <div className={styles['about-navBar']}>
                <p onClick={() => setTabs(0)} style={{ borderBottom: tab === 0 ? '2px solid green' : 'none', color: tab === 0 ? 'green' : 'black' }} >
                    <p>Overview</p>
                </p>
                <hr></hr>
                <p onClick={() => setTabs(1)} style={{ borderBottom: tab === 1 ? '2px solid green' : 'none', color: tab === 1 ? 'green' : 'black' }} >
                    <p >About</p>
                </p>
                <hr></hr>
                <p onClick={() => setTabs(2)} style={{ borderBottom: tab === 2 ? '2px solid green' : 'none', color: tab === 2 ? 'green' : 'black' }} >
                    <p >Product</p>
                </p>
                <hr></hr>
                <p onClick={() => setTabs(3)} style={{ borderBottom: tab === 3 ? '2px solid green' : 'none', color: tab === 3 ? 'green' : 'black' }} >
                    <p >Post</p>
                </p>
                <hr></hr>
                <p onClick={() => setTabs(4)} style={{ borderBottom: tab === 4 ? '2px solid green' : 'none', color: tab === 4 ? 'green' : 'black' }} >
                    <p >Jobs</p>
                </p>
                <hr></hr>
                <p onClick={() => setTabs(5)} style={{ borderBottom: tab === 5 ? '2px solid green' : 'none', color: tab === 5 ? 'green' : 'black' }} >
                    <p >People</p>
                </p>
                <hr></hr>
                <p onClick={() => setTabs(6)} style={{ borderBottom: tab === 6 ? '2px solid green' : 'none', color: tab === 6 ? 'green' : 'black' }} >
                    <p>Videos</p>
                </p>
            </div>
            <div className={styles['about-main-section']} >
                <div  className={styles['main-section-container']} hidden={tab===0?false:true} >
                    <p>About</p>
                    <p>Figma is the first professional-grade online tool created specifically for interface design. Born on the Web, Figma helps the entire team create, test, and ship better, designs, faster.</p>
                    <div>
                        <div>
                            <div>
                            <p>Website URL</p>
                            <p style={{color:'#0a65c6'}}>Figma.com</p>
                            </div>
                        </div>

                        <div>
                            <div>
                            <p style={{opacity: 0.6,fontWeight:'unset'}} >Funding via Crunchbase</p>
                            <p>Series D</p>
                            <p style={{color:'#0a65c6'}} >US$ 50M</p>
                            </div>

                        </div>

                    </div>
                    <p>See all details</p>
                </div>
                <div hidden={tab!==0?false:true}>
                    <p>Not Found</p>
                </div>
            </div>
        </>
    )
}

export default Details
