import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames'

const styles= theme => ({
    root:{
        width: '100%',
        minHeight: '100vh',
        transition: 'all 0.3s ease-out' ,
        padding: '0 32px',
        [theme.breakpoints.up('sm')]: {
            padding: '0 4em',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '6em',
            paddingRight: '2em',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '9.5em',
            paddingRight: '5.5em',
        },
    }
})


function PageContent (props){
    const {classes} = props
    return (
        <div className={classnames(classes.root)}>
            {props.children}
        </div>
    )
}

export default  withStyles(styles)(PageContent)