import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import styles from './ProjectsStyles'
import seedProjects from './seedProjects'
import Project from './project/Project'

function Projects({classes, addAnim}) {
    const projects = seedProjects.map(({projectName, img, github, techs}, i) =>(
        <Project name={projectName} img={img} techs={techs} github={github} key={i} />
    ))
    return (
        <div className={classes.root}>
            <h1>
                <span onMouseOver={addAnim}>P</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>r</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>o</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>j</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>e</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>c</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>t</span>
                <span onMouseOver={addAnim} className={classes.mLeft}>s</span>
            </h1>
            <p className={classes.subtitle}>Here are a few mini projects I've worked on recently.</p>
            <p className={classes.subtitle}>More projects to come soon!</p>
            <div className={classes.wrapper}>
                {projects}
            </div>
        </div>
    )
}

export default withStyles(styles)(Projects)