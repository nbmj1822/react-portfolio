import React,{useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {withStyles} from '@material-ui/core/styles'
import styles from './AboutStyles'
import seedLinks from './seedLinks'

function About({classes, addAnim}) {
    const {isDarkMode} = useContext(ThemeContext);
    const renderTexts = seedLinks.map(({name, link}, i)=>{
        const randX = Math.floor(Math.random() * 280) + i;
        const randY = Math.floor(Math.random() * 280) + i;
        const randFont = Math.round(Math.random() * 18) + 22;
        const delay = (i+2.6) / 2
        return <a 
        href={link}
        target='_blank'
        rel="noopener noreferrer"
        className={isDarkMode ? classes.textLight : undefined}
        key={i}
        style={{
            left: `${randX}px`,
            top: `${randY}px`,
            fontSize: `${randFont}px`,
            animation: `fadeIn 0.3s ${delay}s ease-in forwards`,
        }}>{name}</a>
    })
    return (
        <div className={classes.root}>
            <div className={classes.aboutLeft}>
                <h1>
                    <span onMouseOver={addAnim}>A</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>b</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>o</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>u</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>t</span>
                    <span onMouseOver={addAnim}>m</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>e</span>
                </h1>
                {/* EDIT TEXT FOR ABOUT PAGE */}
                    <p className={isDarkMode ? classes.textLight : undefined}>I started my web development journey as a self taught learner last june 2020.</p> 
                    <p className={isDarkMode ? classes.textLight : undefined}>I enjoy to code things, sharing and turn ideas into reality if possible.</p>
                    <p className={isDarkMode ? classes.textLight : undefined}>Enjoy working as a team member as well as independently.</p>
                    <p className={isDarkMode ? classes.textLight : undefined}>I am interested in gaining opportunities not only on the entire front end side but to develop both client and server software.</p> 
                {/* EDIT TEXT FOR ABOUT PAGE */}
            </div>
            <div className={classes.aboutRight}>
                <div className={isDarkMode ? classes.bgDark : undefined}>
                    {renderTexts}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(About)

// classnames(classes.aboutRight, !isDarkMode && classes.infinityDark)