import react from 'react';
import classes from './Quote.module.css';

import Card from '../../../UI/Card';

const Quote = () => {
    return <Card className={classes.card} style={{backgroundColor:'rgb(105, 120, 255, .25)'}}>
        <h1>quote</h1>
    </Card>
};

export default Quote;