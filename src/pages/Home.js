import {useContext} from 'react';

import classes from './Home.module.css'

import News from '../components/Pages/home/news/News';
import Quote from '../components/Pages/home/quote/Quote';
import Weather from '../components/Pages/home/weather/Weather';
import Tasks from '../components/Pages/home/tasks/Tasks';
import Calendar from '../components/Pages/home/calendar/Calendar';

import { ColorContext } from '../store/color-context';

const Home = () => {
    const [textColor] = useContext(ColorContext)

    return <div className={`${classes.flex} page`} style={{ height: '94vh'}}>
        <div className={`${classes.flex_column} ${classes.column1}`}>
            <h1 style={{color:textColor}}>Good Morning, Michael</h1>
            <div className={classes.flex}>
                <div className={classes.flex_column} style={{width: '50%'}}>
                    <News />
                    <Weather />
                </div>
                <div className={classes.flex_column} style={{width: '50%'}}>
                    <Quote />
                    <Tasks />
                </div>
            </div>
        </div>
        <Calendar />
    </div>
};

export default Home;