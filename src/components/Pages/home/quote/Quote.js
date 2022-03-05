import { useContext } from 'react';

import classes from './Quote.module.css';

import Card from '../../../UI/Card';

import { ColorContext } from '../../../../store/color-context';

const Quote = () => {
    const [textColor] = useContext(ColorContext)

    return <Card className={classes.card} style={{backgroundColor:`${textColor}52`}}>
        <h1>quote</h1>
    </Card>
};

export default Quote;