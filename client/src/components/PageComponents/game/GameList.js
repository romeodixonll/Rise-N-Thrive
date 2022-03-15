import { useContext } from 'react';
import classes from './GameList.module.css';
import { ColorContext } from '../../../store/color-context';
import GameContainer from './GameContainer';
import penguinImg from '../../../assets/images/game-images/penguin-game.png';

const games = [
    {
        title: 'Lil\' Penguin',
        img: penguinImg,
        href: '/penguin-game/scene.html',
        unique: 'Highscore: ',
        stat: 34
    },
    {
        title: 'Yodel',
        img: penguinImg,
        href: '/yodel',
        unique: 'Average Tries: ',
        stat: 6 
    }
]

const GameList = () => {
    const [textColor, , theme] = useContext(ColorContext)

    return (
        <div>
            <GameContainer games={games}/>
        </div>
    )
}

export default GameList