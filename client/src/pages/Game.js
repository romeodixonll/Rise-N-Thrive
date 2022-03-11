import classes from './Game.module.css'
import React from 'react'

const Game = () => {
    return (
    <div className={`${classes.flex} game-content`} style={{ height: '94vh'}} id='game-content'>
        <a href="/penguin-game/scene.html">Click Me!</a>
    </div>
)}

export default Game