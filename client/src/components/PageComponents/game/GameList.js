import { useContext, useEffect, useState } from 'react';
import classes from './GameList.module.css';
import { ColorContext } from '../../../store/color-context';
import GameContainer from './GameContainer';
import penguinImg from '../../../assets/images/game-images/penguin/penguin-game.png';
import yodelImg from '../../../assets/images/game-images/yodel/yodel.png';

// Database Imports
import { useQuery } from '@apollo/client'
import { QUERY_STATS } from '../../utils/queries';

const GameList = () => {
    // State Variables
    const [textColor, , theme] = useContext(ColorContext);
    const { loading, data } = useQuery(QUERY_STATS);
    const [games, setGames] = useState([])


    useEffect(() => {
        if (loading) {
            console.log('is loading')
        } else {
            let tempGames = [
                {
                    title: 'Yodel',
                    img: yodelImg,
                    href: '/yodel',
                    unique: 'Average Tries: ',
                    stat: data.allStats.stats[0].averageTries
                },
                {
                    title: 'Lil\' Penguin',
                    img: penguinImg,
                    href: '/penguin-game/scene.html',
                    unique: 'Highscore: ',
                    stat: data.allStats.stats[0].highScore
                }
            ];

            setGames(tempGames)
            console.log(data.allStats.stats[0])
        }   
    }, [loading])



    return (
        <div>
            <GameContainer games={games}/>
        </div>
    )
}

export default GameList