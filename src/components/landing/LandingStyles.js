const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        paddingTop: '64px',
        [theme.breakpoints.up('md')]: {
            paddingTop: 0,
            justifyContent: 'space-between',
        }
    },
    heroLeft: {
        opacity: 0,
        animation: 'fadeIn 0.3s 0.3s ease-in forwards',
        '& h1': {
            letterSpacing: '14px',
            fontSize: '22px',
            color: '#3D3D3D',
            [theme.breakpoints.up('md')]:{
                fontSize: '40px'
            },
        },
        '& span' :{
            display: 'inline-block',
            transition: 'all 0.3s ',
            '&:hover':{
                color: '#FF0080',
            }
        }
        ,
        '& p': {
            color: '#818181',
            letterSpacing: '8px',
            margin: '1em 0 4em',
            fontSize: '0.8em'
        },
        '& a':{
            border: '1px solid #FF0080',
            color: '#FF0080',
            padding: '0.5em 1em',
            textDecoration: 'none',
            letterSpacing: '3px',
            '&:hover':{
                color: '#E8E8E8',
                backgroundColor: '#FF0080'
            }
        }
    },
    mLeft:{
        marginLeft: '-14px'
    },
    name: {
        fontSize: '2em',
        color: '#FF0080'
    },
    textLight: {
        color: 'white !important'
    },
    hoverDark:{
        '&:hover':{
            color: '#232323 !important'
        }
    },
    heroRight: {
        opacity: 0,
        animation: 'fadeIn 0.3s 0.6s ease-in forwards',
        display: 'none',
        backgroundImage: 'url(icons/infinity-light.svg)',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        marginLeft: theme.spacing(4),
        height: '400px',
        width: '50%',
        transition: 'all 0.3s ease-out',
        [theme.breakpoints.up('md')]: {
            display: 'inline-block',
        },
        [theme.breakpoints.up('lg')]:{
            marginLeft: theme.spacing(16),
            maxWidth: '480px'
        }
    },
    infinityDark: {
        backgroundImage:'url(/icons/infinity-dark.svg)',
    }
})

export default styles