import { useContext } from 'react';

import classes from './CodeOutput.module.css'

import Card from '../../../UI/Card';
import { ColorContext } from '../../../../store/color-context'

const CodeOutput = () => {
    const [textColor, , theme] = useContext(ColorContext)
    return <Card className={classes.card}
        style={theme === "#393939"
            ? { backgroundColor: `${textColor}52`, color: 'white' }
            : { backgroundColor: `${textColor}99`, color: 'black' }}>
        <div>
            <h3>Your Output</h3>
            <p>[1, 1]</p>
        </div>
        <hr />
        <div>
            <h3>Expect Output</h3>
            <p>[1, 0]</p>
        </div>
    </Card >
};

export default CodeOutput;