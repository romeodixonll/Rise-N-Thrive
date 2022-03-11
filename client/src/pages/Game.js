import classes from './Game.module.css'
import React from 'react'
import GameList from '../components/PageComponents/game/GameList'

const Game = () => {
    return (
    <div className={`${classes.flex} page`} style={{ height: '94vh'}}>
        <GameList />
    </div>
)}

export default Game