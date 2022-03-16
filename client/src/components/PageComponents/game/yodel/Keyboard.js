import classes from './Keyboard.module.css';
import { useEffect, useState } from 'react';

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

let toggle = true;

const Keyboard = ({ outcast, editing, handleKeyPress, refreshKeys, keyRefresh}) => {
    const [buttonBackground, setButtonBackground] = useState([]);
    const [click, setClick] = useState(true);

    const refreshKeyBackground = () => {
        let tempColors = []
        for(let i=0; i<28; i++){
            tempColors[i] = 'rgb(145, 146, 140)';
        }

        setButtonBackground(tempColors);
    }

    const editKey = (e) => {
        let currentColor = buttonBackground[e.target.value];
        let colorArray = ['rgb(145, 146, 140)', 'rgb(236, 240, 12)', 'rgb(36, 133, 33)', 'rgb(216, 84, 75)'];
        let temporaryColors = buttonBackground;

        switch(currentColor){
            case colorArray[0]:
                temporaryColors[e.target.value] = colorArray[1]
                setButtonBackground(temporaryColors);
                setClick(!click);
                break;
            case colorArray[1]:
                temporaryColors[e.target.value] = colorArray[2]
                setButtonBackground(temporaryColors);
                setClick(!click);
                break;
            case colorArray[2]:
                temporaryColors[e.target.value] = colorArray[3]
                setButtonBackground(temporaryColors);
                setClick(!click);
                break;
            case colorArray[3]:
                temporaryColors[e.target.value] = colorArray[0]
                setButtonBackground(temporaryColors);
                setClick(!click);
                break;
        }
    }

    useEffect(()=> {
        if(refreshKeys){
            refreshKeyBackground();
            keyRefresh();
        }
    })

    return (
        // Entire Keyboard
        <div className={classes.keyboard}>

                {/* Create rows for each array of keys */}
                {keys.map((item, itemIndex) => (
                    <div className={classes.row} key={itemIndex}>

                        {/* Each key is a button added into a row */}
                        {item.map((character, charIndex) => (
                            <button key={charIndex} value={itemIndex === 0 ? charIndex : itemIndex === 1 ? (10 + charIndex) : (19 + charIndex)} onClick={(e)=>{editing ? editKey(e) : handleKeyPress(character)}}
                            style={outcast.includes(character) ? { backgroundColor: '#2c2c2c', color: 'black' }
                            : { backgroundColor: buttonBackground[itemIndex === 0 ? charIndex : itemIndex === 1 ? (10 + charIndex) : (19 + charIndex)]}}>
                                {character}
                            </button>
                        ))}
                    </div>
                ))}
        </div>
    )
}

export default Keyboard