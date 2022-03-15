import React from 'react';
import classes from './Game.module.css'
import IndecisionApp from '../components/PageComponents/indecision/components/IndecisionApp';
import '../components/PageComponents/indecision/components/styles.css'
const Indecision = () => {
    return (
    <div className={`${classes.flex} page`} style={{ height: '94vh'}}>
        <IndecisionApp />
    </div>
)}

export default Indecision;