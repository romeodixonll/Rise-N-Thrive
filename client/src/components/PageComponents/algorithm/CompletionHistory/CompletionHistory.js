import React from 'react';

import classes from './CompletionHistory.module.css'

import Card from '../../../UI/Card';
import Tile from './Tile'

let DUMMY_DATA = [true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, false, false, true, true, false, false,true, false, false, true, true, true, true]

const CompletionHistory = () => {
    return <Card className={classes.card} style={{ backgroundColor: "rgb(41, 41, 41)" }}>
        {DUMMY_DATA.map((entry, i) => <Tile key={i} completed={entry}/>)}
        {/* <Tile completed={true}/> */}
    </Card>
};

export default CompletionHistory;