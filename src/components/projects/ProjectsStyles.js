const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        paddingTop: '128px',
        diplay: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        animation: 'fadeIn 0.3s 0.3s ease-in forwards',
        '& h1': {
            letterSpacing: '10px',
            color: '#FF0080',
            fontSize: '40px',
            [theme.breakpoints.up('sm')]:{
                fontSize: '48px'
            },
            [theme.breakpoints.up('md')]:{
                fontSize: '52px'
            },
            [theme.breakpoints.up('lg')]:{
                fontSize: '60px'
            },
            '& span' :{
            display: 'inline-block',
            transition: 'all 0.3s ',
            '&:hover':{
                color: '#FF0080',
            }
        }
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '32px',
        }
    },
    mLeft:{
        marginLeft: '-10px'
    },
    subtitle:{
        color: '#818181',
        letterSpacing: '4px',
        fontSize: '0.9em',
        margin: '1em 0'
    },
    wrapper: {
        opacity: 0,
        animation: 'fadeIn 0.3s 0.6s ease-in forwards',
        padding: '1em 0 2em',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
})

export default styles;