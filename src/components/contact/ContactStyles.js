const styles = theme => ({
    root:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        paddingTop: '64px',
        [theme.breakpoints.up('md')]: {
            paddingTop: 0,
        }
    },
    contactLeft:{
        transition: 'all 0.3s ease-out',
        maxWidth: '800px',
        padding: '2em',
        border: '8px solid #FF0080',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        backgroundColor:'#E8E8E8',
        opacity: 0,
        animation: 'fadeIn 0.3s 0.3s ease-in forwards',
        '& h1':{
            letterSpacing: '10px',
            color: '#FF0080',
            textAlign: 'center',
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
            textAlign: 'center',
            fontSize: '0.9em',
            marginTop: '1em',
            marginBottom: '2em',
            color: 'white',
            transition: 'all 0.3s ease-out'
        },
        '& form':{
            marginTop: '2em',
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& input':{
                width: '100%',
                padding: '1em 1.5em',
                marginBottom: '0.8em',
                border: 'none',
                background: 'none',
                borderBottom: '2px solid #E8E8E8',
                color: '#797979',
                outline: 'none',
                fontFamily: '"Exo", sans-serif',
                fontSize: '1em',
                transition: 'all 0.3s ease-out',
                '&:focus':{
                    borderBottom: '2px solid #FF0080 !important'
                }
            },
            '& button':{
                margin: '2em auto 0',
                padding: '0.5em 2em',
                fontSize: '1em',
                outline: 'none',
                cursor: 'pointer',
                background: 'none',
                color: '#FF0080',
                border: '1px solid #FF0080',
                '&:hover':{
                    backgroundColor: '#FF0080',
                    color: '#232323'
                }
            },
            [theme.breakpoints.up('sm')]:{
                marginTop: '4em',            
            },
        },
        [theme.breakpoints.up('sm')]:{
            padding: '2em 4em'
        },
        [theme.breakpoints.up('md')]:{
            padding: '3em 6em'
        },
        [theme.breakpoints.up('lg')]:{
            padding: '4em 6em'
        },
    },
    bgDark:{
        backgroundColor: '#232323 !important'
    },
    mLeft:{
        marginLeft: '-10px'
    },
    formDark: {
        '& input': {
            borderBottom: '1px solid #313131  !important'
        },
    },
    buttonDark: {
        '&:hover':{
            color: '#E8E8E8 !important'
        }
    }
    ,
    inputHalf:{
        [theme.breakpoints.up('sm')]:{
            width: '48% !important'
        }
    },
    textLight: {
        color: '#3D3D3D !important'
    },
    status:{
        width: '100%',
        textAlign: 'right',
        color : '#FF0080  !important',
        opacity: 0,
        animation: 'fadeIn 0.3s ease-in forwards',
    }
})

export default styles;