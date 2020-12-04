import React, { useContext } from 'react';
import classnames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import AboutIcon from '@material-ui/icons/PermIdentityOutlined';
import ProjectIcon from '@material-ui/icons/BuildOutlined';
import ContactIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles'
import styles from './NavbarStyles'
import {ThemeContext} from '../../context/ThemeContext'
import { Link, NavLink } from 'react-router-dom';
import useToggleState from '../../hooks/useToggleState';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/NightsStay';
 
function Navbar({classes}){
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const [isOpen, toggleMenu] = useToggleState(false)

    return (
        <div className={classes.root}>
            <AppBar position='fixed' elevation={0} className={classnames(classes.appBar, isDarkMode && classes.bgDark)}>
                <Toolbar disableGutters={true} className={classes.toolbar}>
                    <Link to='/'  className={classnames(classes.brand, isDarkMode && classes.brandDark)}>
                        <img src={`/icons/${isDarkMode? 'infinity-light' : 'infinity-dark'}.svg`}   alt="NBMJ" />
                        <span>NBMJ</span>
                    </Link>
                    <IconButton className={classes.switch} onClick={toggleTheme}>
                        {isDarkMode? <DarkIcon fontSize="large" /> : <LightIcon fontSize="large" /> }
                    </IconButton>
                    <div className={classes.grow} />
                    <IconButton className={classes.menuButton} onClick={toggleMenu}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <nav className={classnames(classes.navMenu, isDarkMode && classes.bgDark, isOpen && classes.openNav)}>
                      <NavLink to="/home" activeClassName={classes.active}>
                        <div className={classes.navItem}>
                            <HomeIcon fontSize="large" />
                            <p>HOME</p>
                        </div>
                      </NavLink>
                      <NavLink to="/about" activeClassName={classes.active}>
                      <div className={classes.navItem}>
                          <AboutIcon fontSize="large" />
                          <p>ABOUT</p>
                      </div>
                      </NavLink>
                      <NavLink to="/projects" activeClassName={classes.active}>
                      <div className={classes.navItem}>
                          <ProjectIcon fontSize="large" />
                          <p>PROJECTS</p>
                      </div>
                      </NavLink>
                      <NavLink to="/contact" activeClassName={classes.active}>
                      <div className={classes.navItem}>
                          <ContactIcon fontSize="large" />
                          <p>CONTACT</p>
                      </div>
                      </NavLink>
                    </nav>
                    <div className={classes.socialLink}>
                      <a href="https://web.facebook.com/nbmj1822" target="_blank" rel="noopener noreferrer"><div className={classes.facebook}></div></a>
                      <a href="https://www.linkedin.com/in/neil-bry-729a3312b/" target="_blank" rel="noopener noreferrer"><div className={classes.linkedin}></div></a>
                      <a href="https://www.upwork.com/freelancers/~013fdb6b064d230867" target="_blank" rel="noopener noreferrer"><div className={classes.upwork}></div></a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar);