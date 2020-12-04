const styles = theme=>({
    root: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        paddingTop: '64px',
        [theme.breakpoints.up('md')]: {
            paddingTop: 0,
            justifyContent: 'space-between',
        }
    },
    aboutLeft: {
        opacity: 0,
        animation: 'fadeIn 0.3s 0.3s ease-in forwards',
        '& h1':{
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
        '& p':{
            maxWidth: '560px',
            fontSize: '0.9em',
            margin: '1em 0',
            color: '#3D3D3D',
            transition: 'all 0.3s ease-out'
        }
    },
    mLeft:{
        marginLeft: '-10px'
    },
    textLight:{
        color: 'white !important'
    },
    bgDark:{
        backgroundColor: 'rgba(0,0,0,0.3) !important',
    },
    aboutRight: {
        color: '#3D3D3D',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(4),
        height: '400px',
        width: '50%',
        opacity: 0,
        animation: `fadeIn 0.3s 0.6s ease-in forwards`,
        transition: 'all 0.3s ease-out',
        '& div':{
            transition: 'all 0.3s ease-out',
            width:'250px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.3)',
            height: '250px',
            position: 'relative',
        },
        '& a':{
            color: '#3D3D3D',
            textDecoration: 'none',
            opacity: '0',
            position: 'absolute',
            transition: 'all 0.3s',
            '&:hover':{
                color: '#FF0080 !important',
            }
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
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