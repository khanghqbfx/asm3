import React from 'react'
import classes from './Banner.module.css'
import { Link } from 'react-router-dom'
import img1 from "../../img/banner1.jpg"

const Banner = () => {
  return (
    <div className={classes.banner}>
        <div className={classes.subBanner}>
            <span className={classes['sub-title']}>NEW INSPIRATION 2020</span><br/>
            <span className={classes.big}>20% OFF ON NEW SEASON</span><br/>
            <button className={classes.button}><Link to='/shop'>Browse collections</Link></button>
        </div>
        <img src={img1} alt="banner" width='100%'/>
    </div>
  )
}

export default Banner