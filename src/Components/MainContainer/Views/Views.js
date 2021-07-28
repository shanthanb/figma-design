/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Footer from '../Footer/Footer'
import styles from './Views.module.scss'
import VisibilityIcon from '@material-ui/icons/Visibility';
import icons from '../../../Data/Data.json'


function Views() {
    return (
        <div>
            <div className={styles['footer-head']} >
                <p>Pages people also viewed</p>
                <div>
                    {
                        Object.keys(icons.Icons.rightIcon).map((itm) => {
                            return(<div className={styles['ppl-also-viewed']}>
                                <div >
                                <img src={icons.Icons.rightIcon[itm].img} />
                                <div>
                                    <p>{itm}</p>
                                    <p>{`${icons.Icons.rightIcon[itm].type} - ${icons.Icons.rightIcon[itm].followers} followers`}</p>
                                </div>
                                </div>
                                <div>
                                    <VisibilityIcon fontSize="small" /><p>+</p>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Views
