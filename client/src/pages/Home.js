import {useContext} from 'react';

import classes from './Home.module.css'

import News from '../components/PageComponents/home/news/News';
import Quote from '../components/PageComponents/home/quote/Quote';
import Weather from '../components/PageComponents/home/weather/Weather';
import Tasks from '../components/PageComponents/home/tasks/Tasks';
import Calendar from '../components/PageComponents/home/calendar/Calendar';

import { ColorContext } from '../store/color-context';
import Auth from '../components/utils/auth'

const Home = () => {
    const [textColor] = useContext(ColorContext)


    return <div className={`${classes.flex} page`} style={{ height: '94vh'}}>
        <div className={`${classes.flex_column} ${classes.column1}`}> 
            <h1 style={{color:textColor}}>{`Good Morning, ${Auth.getProfile().data.firstName}`}</h1>
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