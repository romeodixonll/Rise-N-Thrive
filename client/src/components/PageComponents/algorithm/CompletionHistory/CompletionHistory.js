import React from 'react';

import classes from './CompletionHistory.module.css'

import Card from '../../../UI/Card';


const CompletionHistory = () => {
    return <Card className={classes.card} style={{ backgroundColor: "rgb(41, 41, 41)" }}>
        <h2>Your activity for the last 7 days</h2>
        <hr />
        <table>
            <tr>
                <td><div></div></td>
                <td><div></div></td>
                <td><div></div></td>
                <td><div></div></td>
                <td><div></div></td>
                <td><div></div></td>
                <td><div></div></td>
            </tr>
            <tr>
                <th>3/6/21</th>
                <th>3/7/21</th>
                <th>3/8/21</th>
                <th>3/9/21</th>
                <th>3/10/21</th>
                <th>3/11/21</th>
                <th>3/12/21</th>
            </tr>
        </table>
    </Card>
};

export default CompletionHistory;