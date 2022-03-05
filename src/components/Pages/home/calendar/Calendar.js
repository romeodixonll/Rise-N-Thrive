import { useContext } from 'react';

import classes from './Calendar.module.css';

import Card from '../../../UI/Card';

import { ColorContext } from '../../../../store/color-context';

const Calendar = () => {
    const [textColor] = useContext(ColorContext)

    console.log(`#52${textColor.slice(1)}`)
    return <Card className={classes.card} style={{backgroundColor: `${textColor}52`}}>
        <h1>Calendar</h1>
    </Card>
}

export default Calendar