import classes from './Keyboard.module.css';
import { useEffect } from 'react';

const keys1 = 'QWERTYUIOP';
const keys2 = 'ASDFGHJKL';
const keys3 = 'ZXCVBNM';

const enter = 'ENTER';
const del = '\u232b';

const letters1 = keys1.split('');
const letters2 = keys2.split('');
const letters3 = keys3.split('');

letters3.push(del);
letters3.unshift(enter);

const keys = [letters1, letters2, letters3]

const Keyboard = ({ boardData, handleKeyPress }) => {
    return (
        // Entire Keyboard
        <div className={classes.keyboard}>

                {/* Create rows for each array of keys */}
                {keys.map((item, itemIndex) => (
                    <div className={classes.row} key={itemIndex}>

                        {/* Each key is a button added into a row */}
                        {item.map((character, charIndex) => (
                            <button key={charIndex} value={character} onClick={()=>{handleKeyPress(character)}}>{character}</button>
                        ))}
                    </div>
                ))}
        </div>
    )
}

export default Keyboard