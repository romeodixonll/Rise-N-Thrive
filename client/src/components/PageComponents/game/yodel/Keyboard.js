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

const editKey = (e) => {
    let currentColor = e.target.style.backgroundColor;
    let colorArray = ['rgb(145, 146, 140)', 'rgb(236, 240, 12)', 'rgb(36, 133, 33)', 'rgb(216, 84, 75)'];

    switch(currentColor){
        case colorArray[0]:
            e.target.style.backgroundColor = colorArray[1]
            break;
        case colorArray[1]:
            e.target.style.backgroundColor = colorArray[2]
            break;
        case colorArray[2]:
            e.target.style.backgroundColor = colorArray[3]
            break;
        case colorArray[3]:
            e.target.style.backgroundColor = colorArray[0]
            break;
    }
}

const Keyboard = ({ outcast, editing, handleKeyPress }) => {
    return (
        // Entire Keyboard
        <div className={classes.keyboard}>

                {/* Create rows for each array of keys */}
                {keys.map((item, itemIndex) => (
                    <div className={classes.row} key={itemIndex}>

                        {/* Each key is a button added into a row */}
                        {item.map((character, charIndex) => (
                            <button key={charIndex} value={character} onClick={(e)=>{editing ? editKey(e) : handleKeyPress(character)}}
                            style={outcast.includes(character) ? { backgroundColor: '#2c2c2c', color: 'black' }
                            : { backgroundColor:'#91928c', color: 'black'}}>
                                {character}
                            </button>
                        ))}
                    </div>
                ))}
        </div>
    )
}

export default Keyboard