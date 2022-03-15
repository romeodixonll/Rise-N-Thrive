import {useState, useContext} from 'react'
import Auth from "../components/utils/auth"
import classes from './Settings.module.css';

import { ColorContext } from '../store/color-context';

const Settings = () => {
    const [textColor, setTextColor, theme, setTheme] = useContext(ColorContext)

    const style = {color: textColor, transition:'200ms linear'}

    const textColorHandler = (color) => {
        setTextColor(color)
    }

    const setThemeHandler = () => {
        console.log('changing theme')
        theme === '#393939' ? setTheme('#d3d3d3') : setTheme('#393939') 
    }


    return <div className={`${classes.flex_column} page`} style={{ height: '94vh',overflow:"hidden" }}>
        <div className={classes.flex_column1}>
            <h1 style={style}>Settings</h1>
            <h2 style={style}>Change your color</h2>
            <div className={classes.flex}>
                <button style={{ backgroundColor: '#6978FF' }} onClick={()=> textColorHandler('#6978FF')}></button>
                <button style={{ backgroundColor: '#CB0000' }} onClick={()=> textColorHandler('#CB0000')}></button>
                <button style={{ backgroundColor: '#FBFF26' }} onClick={()=> textColorHandler('#FBFF26')}></button>
                <button style={{ backgroundColor: '#B17BC3' }} onClick={()=> textColorHandler('#B17BC3')}></button>
                <button style={{ backgroundColor: '#000000' }} onClick={()=> textColorHandler('#000000')}></button>
                <button style={{ backgroundColor: '#FFFFFF' }} onClick={()=> textColorHandler('#FFFFFF')}></button>
            </div>
            <h2 style={style}>Change your theme</h2>
            <div className={classes.themeToggle} onClick={setThemeHandler}>
                <p>dark</p>
                <p>light</p>
                <div className={theme === '#393939' ? classes.darkModeBlock : classes.lightModeBlock }></div>
            </div>
        </div>
        <div className={classes.logoutButtons}>
            <button onClick={() => Auth.logout()}>Logout</button>
            <button>Delete Account</button>
        </div>
    </div>
};

export default Settings;