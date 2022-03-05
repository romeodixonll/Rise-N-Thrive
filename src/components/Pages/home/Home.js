import react from 'react';

import classes from './Home.module.css'

import News from './news/News';
import Quote from './quote/Quote';
import Weather from './weather/Weather';
import Tasks from './tasks/Tasks';
import Calendar from './calendar/Calendar';

const Home = () => {

    return <div className={classes.flex} style={{ height: '94vh'}}>
        <div className={`${classes.flex_column} ${classes.column1}`}>
            <h1 style={{color:'#C2C2C2'}}>Good Morning, Michael</h1>
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