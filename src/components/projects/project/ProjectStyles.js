const styles = theme => ({
    root:{
        width: '100%',
        position: 'relative',
        height: '240px',
        margin: '1em 0',
        overflow: 'hidden',
        '& *':{
            transition: 'all 0.3s ease-in-out' 
        },
        '&:hover img':{
            transform: 'scale(1.2)'
        },
        '&:hover *':{
            opacity: 1
        },
        "& p": {
            opacity: 0,
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        "& img": {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '& ul':{
            opacity: 0,
            position: 'absolute',
            bottom: 0,
            right: 0,
            display: 'flex',
            listStyle: 'none',
            '& li':{
                backgroundColor: '#FF0080',
                color: 'white',
                padding: '0.2em 0.5em',
                fontSize: '0.8em',
                margin: '0.2em'
            }
        },
        [theme.breakpoints.up('sm')]:{
            width: '50%',
            margin: 0
        },
        [theme.breakpoints.up('md')]:{
            width: '33.333%'
        }
    },
    textDark:{
        color: 'black !important'
    },
    github:{
        opacity: 0,
        position: 'absolute',
        top: '16px',
        right: '16px',
        width: '28px',
        height: '28px',
        backgroundImage: 'url(/icons/gh.svg)',
        backgroundSize: 'contain',
        '&:hover':{
            backgroundImage: 'url(/icons/ghH.svg)',
        },
        transition: 'opacity 0.3s ease-in-out'
    },
    githubDark:{
        backgroundImage: 'url(/icons/ghDark.svg)',
    },
    overlay: {
        opacity: '0',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.8)',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
    },
    overlayLight: {
        backgroundColor: 'rgba(255,255,255,0.8)',
    }
})

export default styles;