
import classes from './Weather.module.css'

import Card from '../../../UI/Card'

const Weather = () => {
    return <Card className={classes.card} style={{backgroundColor:'rgb(105, 120, 255, .25)'}}>
        <h1>weather</h1>
    </Card>
}

export default Weather