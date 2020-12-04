import React,{useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {withStyles} from '@material-ui/core/styles'
import styles from './LandingStyles';
import classnames from 'classnames';

function Landing({classes, addAnim}) {
    const {isDarkMode} = useContext(ThemeContext);
    return (
        <div className={classes.root}>
            <div className={classes.heroLeft}>
                <h1 className={classnames({[classes.textLight] : isDarkMode})}>
                    <span onMouseOver={addAnim}>H</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>e</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>l</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>l</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>o</span>
                    <span onMouseOver={addAnim}>T</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>h</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>e</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>r</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>e</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>!</span>
                    <br />
                    <span onMouseOver={addAnim}>M</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>y</span>
                    <span onMouseOver={addAnim}>n</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>a</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>m</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>e</span>
                    <span onMouseOver={addAnim}>i</span>
                    <span onMouseOver={addAnim} className={classes.mLeft}>s</span>
                    <br />
                    <span onMouseOver={addAnim} className={classes.name}>N</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>e</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>i</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>l</span>
                    <span onMouseOver={addAnim} className={classes.name}>B</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>r</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>y</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>a</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>n</span>
                    <span onMouseOver={addAnim} className={classnames(classes.name, classes.mLeft)}>.</span>
                    </h1>
                <p>Self-taught Front End Developer</p>
                <a className={isDarkMode ? classes.hoverDark : undefined} href="https://mailchi.mp/ae9522d2b1ef/do-you-want-to-build-your-dream-website-or-web-application" target="_blank noopener noreferrer">Email me</a>
            </div>
            <div className={classnames(classes.heroRight,{[classes.infinityDark]: !isDarkMode })}>
            </div>
        </div>
    )
}

export default withStyles(styles)(Landing)
