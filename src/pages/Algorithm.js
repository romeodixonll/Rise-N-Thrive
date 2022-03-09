import { useState, useContext } from 'react';

import classes from './Algorithm.module.css'

import TextEditor from '../components/PageComponents/algorithm/TextEditor'
import Card from '../components/UI/Card'
import { ColorContext } from '../store/color-context';
const Algorithm = () => {
    const [code, setCode] = useState('');
    const [textColor] = useContext(ColorContext);
    return <div className={`${classes.flex} page`} style={{ height: '94vh' }}>
        <div className={classes.flex_column}>
            <div className={classes.row1}>
                <div className={classes.column1}>
                    <TextEditor
                        value={code}
                        onChange={setCode}
                    />
                    <div className={classes.row3}>
                        <button>RUN</button>
                        <p>INCORRECT</p>
                    </div>
                </div>
                <Card className={classes.column2} style={{ backgroundColor: textColor }}>
                    <h3>Instruction</h3>
                </Card>
            </div>
            <div className={classes.row2}>
                <Card style={{ backgroundColor: textColor }}>tset</Card>
                <Card style={{ backgroundColor: "rgb(41, 41, 41)" }}>tset</Card>
            </div>
        </div>
    </div>
}

export default Algorithm