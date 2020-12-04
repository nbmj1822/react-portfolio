import React,{useContext} from 'react';
import {ThemeContext} from '../../../context/ThemeContext'
import {withStyles} from '@material-ui/core/styles'
import styles from './ProjectStyles'
import classnames from 'classnames';


function Project({name, img, techs, github, classes}) {
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <div className={classes.root}>
            <img src={img} alt={name} />
            <div className={classnames(classes.overlay, {[classes.overlayLight] : !isDarkMode})}></div>
            <p className={classnames({[classes.textDark] : !isDarkMode })}>{name}</p>
            {github && 
             <a href={github} className={classnames(classes.github, {[classes.githubDark]: !isDarkMode})}> </a>
            }
            <ul>
                {techs.map((tech,i) => (
                    <li key={i}>{tech}</li>
                ))}
            </ul>
        </div>
    )
}

export default withStyles(styles)(Project);