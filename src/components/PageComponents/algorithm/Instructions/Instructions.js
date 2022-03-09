import { useContext } from 'react';

import classes from './Instructions.module.css'

import Card from '../../../UI/Card';
import { ColorContext } from '../../../../store/color-context'

const Instructions = () => {
    const [textColor, ,theme] = useContext(ColorContext)
    return     <Card className={classes.card}
    style={theme === "#393939"
        ? { backgroundColor: `${textColor}52`, color: 'white' }
        : { backgroundColor: `${textColor}99`, color: 'black' }}>
        <h2>Instructions</h2>
        <hr style={theme === '#393939' ? {borderColor:'white'} : {borderColor:'black'}}/>
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