import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';


import homeBlack from '../../assets/images/nav-images/home-black.png';
import algoBlack from '../../assets/images/nav-images/algorithm-black.png';
import gameBlack from '../../assets/images/nav-images/game-black.png';
import stockBlack from '../../assets/images/nav-images/crypto-black.png';
import settingBlack from '../../assets/images/nav-images/settings-black.png';
import homeWhite from '../../assets/images/nav-images/home-white.png';
import algoWhite from '../../assets/images/nav-images/algorithm-white.png';
import gameWhite from '../../assets/images/nav-images/game-white.png';
import stockWhite from '../../assets/images/nav-images/crypto-white.png';
import settingWhite from '../../assets/images/nav-images/settings-white.png';
import homeGrey from '../../assets/images/nav-images/home-grey.png';
import algoGrey from '../../assets/images/nav-images/algorithm-grey.png';
import gameGrey from '../../assets/images/nav-images/game-grey.png';
import stockGrey from '../../assets/images/nav-images/crypto-grey.png';
import settingGrey from '../../assets/images/nav-images/settings-grey.png';
import questionMark from '../../assets/images/nav-images/question-mark.png'

import classes from './NavTabs.module.css'

import { ColorContext } from '../../store/color-context';


const NavTabs = () => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [textColor, , theme] = useContext(ColorContext)
    const [iconColor, setIconColor] = useState('Grey')

    const [currentPage, setCurrentPage] = useState('home')

    // let noStyle = { color: 'white', backgroundColor: 'transparent' }
    // let activeAnchorBackground = { backgroundColor: '#232323' };
    // let activeAnchorColor = { color: textColor }

    const styleHandler = () => {
        if (theme === "#393939") {
            setIconColor('Grey')
            return "darkModeSelection"
        } else {
            setIconColor('Black')
            return "lightModeSelection"
        }
    }

    const handleNavClick = (e) => {
        let selectedPage = e.currentTarget.href.split('/').pop();
        
        if (isTransitioning || currentPage == selectedPage) {
            e.preventDefault();
        } else {
            setCurrentPage(selectedPage);
            setIsTransitioning(true)
            setTimeout(() => setIsTransitioning(false), 1000)
        }
    }

    return (
        <ul className={classes.ul}>
            <li>
                <NavLink
                    onClick={handleNavClick}
                    to="/home"
                    exact>
                    <div className={classes.flex}>
                        <img
                            className={classes.logo}
                            src={theme === "#393939" ? homeGrey : homeBlack}
                            alt="home logo" />
                        <p style={theme === "#393939" ? {color:'white'} : {color:'black'}}>Home</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                onClick={handleNavClick}
                    to="/algorithm">
                    <div className={classes.flex}>
                        <img
                            className={classes.logo}
                            src={theme === "#393939" ? algoGrey : algoBlack} alt="algo logo" />
                        <p style={theme === "#393939" ? {color:'white'} : {color:'black'}}>Algorithm</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                onClick={handleNavClick}
                    to="/game">
                    <div className={classes.flex}>
                        <img
                            className={classes.logo}
                            src={theme === "#393939" ? gameGrey : gameBlack}
                            alt="game logo" />
                        <p style={theme === "#393939" ? {color:'white'} : {color:'black'}}>Game</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                onClick={handleNavClick}
                    to="/stocks">
                    <div className={classes.flex}>
                        <img
                            className={classes.logo}
                            src={theme === "#393939" ? stockGrey : stockBlack}
                            alt="crypto logo" />
                        <p style={theme === "#393939" ? {color:'white'} : {color:'black'}}>Stocks</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                onClick={handleNavClick}
                    to="/indecision">
                    <div className={classes.flex}>
                        <img
                            className={classes.logo}
                            src={theme === "#393939" ? questionMark : questionMark}
                            alt="indecision logo" />
                        <p style={theme === "#393939" ? {color:'white'} : {color:'black'}}>IndecisionApp</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink
                onClick={handleNavClick}
                    to="/settings">
                    <div className={classes.flex}>
                        <img
                            className={classes.logo}
                            src={theme === "#393939" ? settingGrey : settingBlack}
                            alt="settings logo" />
                        <p style={theme === "#393939" ? {color:'white'} : {color:'black'}}>Settings</p>
                    </div>
                </NavLink>
            </li>
        </ul>
    );
};

export default NavTabs