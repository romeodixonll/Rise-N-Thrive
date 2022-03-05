import { useContext } from 'react';

import classes from './Weather.module.css'

import Card from '../../../UI/Card'

import { ColorContext } from '../../../../store/color-context';

const Weather = () => {
    const [textColor] = useContext(ColorContext)

    return <Card className={classes.card} style={{backgroundColor: `${textColor}52`}}>
        <h1>weather</h1>
    </Card>
}

export default Weather