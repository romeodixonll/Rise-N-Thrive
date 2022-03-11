import classes from './Game.module.css'
import Phaser from 'phaser'
import PenguinGame from '../components/PageComponents/game/penguinScript'
import penguinImg from '../assets/images/penguin-images/lil-penguin-idle.png';
import krillImg from '../assets/images/penguin-images/krill.png';

const Game = () => {
    return (
    <div className={`${classes.flex} game-content`} style={{ height: '94vh'}} id='game-content'>
        {/* <PenguinGame /> */}
    </div>
)}

export default Game