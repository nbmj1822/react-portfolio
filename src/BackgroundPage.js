import React, {useContext} from 'react'
import {ThemeContext} from './context/ThemeContext';

const styles = {
    width: '100%',
    height: '100%',
    transition: 'all 0.3s ease-out' ,
    position: 'fixed'
}


function BackgroundPage() {
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <div style={{...styles, backgroundColor: isDarkMode? '#232323' : '#E8E8E8' }}>
        </div>
    )
}

export default BackgroundPage;