import { useContext } from 'react';

import classes from './Instructions.module.css'

import Card from '../../../UI/Card';
import { ColorContext } from '../../../../store/color-context'

const Instructions = () => {
    const [textColor] = useContext(ColorContext)
    return <Card className={classes.card} style={{ backgroundColor: `${textColor}52`, color:'white' }}>
        <h2>Instructions</h2>
        <hr />
        <h3>Add 1 to the digits array, then modify and return the original array.  Do not use any Array methods, such as `.join` or `.split`.
            For example, given the following array:
            <code>
                var digits = [1, 2, 3];
            </code>
            The following should be returned:
            <code>
                [1, 2, 4];
            </code>
            Given the following array:
            <code>
                var digits = [9];
            </code>
            The following should be returned:
            <code>
                [1, 0];
            </code>
        </h3>
    </Card>
};

export default Instructions;