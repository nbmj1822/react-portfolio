// import {fade} from '@material-ui/core/styles/colorManipulator'
const styles = theme => ({
    root: {
        width: '100%',
        marginBottom: 0,
        '& svg':{
            color: '#7d7d7d',
            transition: 'all 0.3s ease-out'
        }
    },
    appBar:{
        transition: 'all 0.3s ease-out' ,
        backgroundColor: '#D0D0D0',
        [theme.breakpoints.up('md')]:{
            width: '64px',
            height: '100%',
            left: 0
        }  
     },
     bgDark:{
        backgroundColor: '#1A1A1A !important'
     },
     toolbar: {
        [theme.breakpoints.up('md')]:{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '64px',
            height: '100%'
        }
     },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    brand:{
        // change font below
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '16px',
        color: '#3D3D3D',
        textDecoration: 'none',
        minHeight: '64px',
        minWidth: '64px',
        transition: 'all 0.3s ease-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        '& img':{
            transition: 'all 0.3s ease-out',
            width: '40px',
            marginBottom: '-4px'  
        }
    },
    brandDark:{
        backgroundColor: '#000000 !important',
        color: '#ffffff'
    },
    switch:{
        marginLeft: '1em',
        [theme.breakpoints.up('md')]:{
            margin: '1em 0',
        },
        '& svg':{
            color: '#FF0080'
        }
    },
    navMenu:{
        position: "fixed",
        top: '64px',
        width: '100%',
        left: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '64px',
        transition: 'all 0.3s ease-out',
        overflow: 'hidden',
        backgroundColor: '#D0D0D0',
        '& a:hover svg':{
            color: '#FF0080 !important',
            opacity: 0,
        },
        '& a:hover p':{
            opacity: 1,
        },
        [theme.breakpoints.up('sm')]:{
            position: 'static',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('md')]:{
            flexDirection: 'column',
            height: '100%'
        }
    },
    openNav:{
        left : 0
    },
    active:{
        '& svg': {
            color: '#FF0080 !important'
        }
    },
    navItem:{
        position:'relative',
        textAlign: 'center',
        '& p':{
            position: 'absolute' ,
            color: '#FF0080',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            transition: 'all 0.3s ease-out',
            fontSize: '0.8em'
        },
        [theme.breakpoints.up('sm')]:{
            marginRight: theme.spacing(5)
        },
        [theme.breakpoints.up('md')]:{
            marginRight: 0,
            marginBottom: theme.spacing(5)
        },
    },
    socialLink:{
        display: 'none',
        textAlign:'center',
        marginRight: theme.spacing(2),
        '& a': {
            minWidth: theme.spacing(4),
            height: '100%',
            '& div': {
                width: '100%',
                height: "16px",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            },
            [theme.breakpoints.up('md')]:{
                minHeight: '16px',
                marginBottom: theme.spacing(2)
            }
        },
        [theme.breakpoints.up('sm')]:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]:{
            marginRight: 0,
            flexDirection: 'column'
        }
    },
    facebook:{
        backgroundImage: 'url(/icons/facebook.svg)',
        '&:hover':{
            backgroundImage: 'url(/icons/facebookH.svg)',
        }
    },
    linkedin:{
        backgroundImage: 'url(/icons/linkedin.svg)',
        '&:hover':{
            backgroundImage: 'url(/icons/linkedinH.svg)',
        }
    },
    upwork:{
        backgroundImage: 'url(/icons/upwork.svg)',
        '&:hover':{
            backgroundImage: 'url(/icons/upworkH.svg)',
        }
    },
})

export default styles;