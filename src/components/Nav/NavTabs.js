import { useState } from 'react';

import homeBlack from '../../assets/images/nav-images/home-black.png';
import algoBlack from '../../assets/images/nav-images/algorithm-black.png';
import gameBlack from '../../assets/images/nav-images/game-black.png';
import stockBlack from '../../assets/images/nav-images/crypto-black.png';
import settingBlack from '../../assets/images/nav-images/settings-black.png';

import classes from './NavTabs.module.css'

const NavTabs = ({currentPage, handlePageChange}) => {
    return (
        <ul className={classes.ul}>
            <li>
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    <div className={classes.flex}>
                        <img className={classes.logo} src={homeBlack} alt="home logo"/>
                        <p>Home</p>
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="#algorithm"
                    onClick={() => handlePageChange('Algorithm')}
                    className={currentPage === 'Algorithm' ? 'nav-link active' : 'nav-link'}
                >
                    <div className={classes.flex}>
                        <img  className={classes.logo} src={algoBlack} alt="algo logo"/>
                        <p>Algorithm</p>
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="#game"
                    onClick={() => handlePageChange('Game')}
                    className={currentPage === 'Game' ? 'nav-link active' : 'nav-link'}
                >
                    <div className={classes.flex}>
                        <img  className={classes.logo} src={gameBlack} alt="game logo"/>
                        <p>Game</p>
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="#stocks"
                    onClick={() => handlePageChange('Stocks')}
                    className={currentPage === 'Stocks' ? 'nav-link active' : 'nav-link'}
                >
                    <div className={classes.flex}>
                        <img  className={classes.logo} src={stockBlack} alt="crypto logo"/>
                        <p>Stocks</p>
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="#settings"
                    onClick={() => handlePageChange('Settings')}
                    className={currentPage === 'Settings' ? 'nav-link active' : 'nav-link'}
                >
                    <div className={classes.flex}>
                        <img className={classes.logo} src={settingBlack} alt="settings logo"/>
                        <p>Settings</p>
                    </div>
                </a>
            </li>
        </ul>
    );
};

export default NavTabs