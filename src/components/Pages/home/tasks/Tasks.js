
import classes from './Tasks.module.css'

import Card from '../../../UI/Card'

const Task = () => {
    return <Card className={classes.card} style={{backgroundColor:'#292929'}}>
        <h1>Tasks</h1>
    </Card>
};

export default Task;