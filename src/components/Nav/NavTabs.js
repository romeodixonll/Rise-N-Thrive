import { useContext } from 'react';

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

import classes from './NavTabs.module.css'

import { ColorContext } from '../../store/color-context';


const NavTabs = ({currentPage, handlePageChange}) => {

    const [textColor] = useContext(ColorContext)

    let noStyle = {color:'white', backgroundColor:'transparent'}
    let activeAnchorBackground = {backgroundColor:'#232323'};
    let activeAnchorColor = {color:textColor}

    return (
        <ul className={classes.ul}>
            <li style={currentPage === 'Home' ? activeAnchorBackground : noStyle}>
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')} 
                    style={currentPage === 'Home' ? activeAnchorColor : noStyle}
                >
                    <div className={classes.flex}>
                        <img className={classes.logo} src={homeGrey} alt="home logo"/>
                        <p>Home</p>
                    </div>
                </a>
            </li>
            <li style={currentPage === 'Algorithm' ? activeAnchorBackground : noStyle}>
                <a
                    href="#algorithm"
                    onClick={() => handlePageChange('Algorithm')}
                    style={currentPage === 'Algorithm' ? activeAnchorColor : noStyle}
                >
                    <div className={classes.flex}>
                        <img  className={classes.logo} src={algoGrey} alt="algo logo"/>
                        <p>Algorithm</p>
                    </div>
                </a>
            </li>
            <li style={currentPage === 'Game' ? activeAnchorBackground : noStyle}>
                <a
                    href="#game"
                    onClick={() => handlePageChange('Game')}
                    style={currentPage === 'Game' ? activeAnchorColor : noStyle}
                >
                    <div className={classes.flex}>
                        <img  className={classes.logo} src={gameGrey} alt="game logo"/>
                        <p>Game</p>
                    </div>
                </a>
            </li>
            <li style={currentPage === 'Stocks' ? activeAnchorBackground : noStyle}>
                <a
                    href="#stocks"
                    onClick={() => handlePageChange('Stocks')}
                    style={currentPage === 'Stocks' ? activeAnchorColor : noStyle}
                >
                    <div className={classes.flex}>
                        <img  className={classes.logo} src={stockGrey} alt="crypto logo"/>
                        <p>Stocks</p>
                    </div>
                </a>
            </li>
            <li style={currentPage === 'Settings' ? activeAnchorBackground : noStyle}>
                <a
                    href="#settings"
                    onClick={() => handlePageChange('Settings')}
                    style={currentPage === 'Settings' ? activeAnchorColor : noStyle}
                >
                    <div className={classes.flex}>
                        <img className={classes.logo} src={settingGrey} alt="settings logo"/>
                        <p>Settings</p>
                    </div>
                </a>
            </li>
        </ul>
    );
};

export default NavTabs