import Keyboard from "./Keyboard"
import classes from "./Yodel.module.css"
import { ColorContext } from '../../../../store/color-context';
import { useState, useEffect, useContext, useRef } from 'react';
import words from './words.json';



const Yodel = () => {
    const [textColor, , theme] = useContext(ColorContext);
    const [boxCharacters, setBoxCharacters] = useState([]);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentBox, setCurrentBox] = useState(0);
    const [answer, setAnswer] = useState('MOPS');
    const [day, setDay] = useState(Date());
    const [winState, setWinState] = useState(false);

    const [resultBox, setResultBox] = useState([]);

    const handleKeyPress = (character) => {
        if(!winState){
            if (character === "⌫"){
                // Only delete letters from boxes on the current row
                if(currentBox > currentRow*4){
                    setCurrentBox(currentBox => currentBox - 1);
                    setBoxCharacters(boxCharacters.slice(0,-1));
                }
            }
            else if(character === 'ENTER'){
                if(currentBox === (currentRow*4 + 4)){
                    let newWord = boxCharacters[currentRow*4] + boxCharacters[currentRow*4+1] + boxCharacters[currentRow*4+2] + boxCharacters[currentRow*4+3]
                    if(words.includes(newWord.toLowerCase())){
                        setCurrentRow(currentRow => currentRow + 1);
                        results(newWord);
                    }else{
                        console.log('This word is not in the database')
                    }
                }else{
                    console.log('Complete your word before you submit!');
                }
            }else if(currentBox < (currentRow*4 + 4)){
                setBoxCharacters( boxCharacters => [...boxCharacters, character]);
                setCurrentBox(currentBox => currentBox + 1);
            }
        }
    }

    const results = async (input) => {
        let answerArray = answer.split('');
        let inputArray = input.split('');

        let yodelCount = 0;
        let echoCount = 0;

        for(let i=0; i<4; i++){
            let guess = inputArray[i];
            let reveal = answerArray[i];

            // Check how many letters are contained in the word and in the right location
            if(guess === reveal){
                yodelCount = yodelCount + 1;
            }
            else if(answerArray.includes(guess)){
                echoCount = echoCount + 1;
            }
        }

        setResultBox(resultBox => [...resultBox, yodelCount]);
        setResultBox(resultBox => [...resultBox, echoCount]);

        if(yodelCount === 4){
            setWinState(true);
        } else if(currentRow === 8){
            console.log(answer);
        }
    }
    
    const newWord = () => {
        let randomNumb = Math.floor(Math.random()*words.length);
        let dailyWord = words[randomNumb].toUpperCase();
    
        setAnswer(dailyWord);
    }
    
    useEffect(() => {
        console.log(day);
        newWord();
    }, [day])

    return(
        <div className={classes.scene}>
            <h1 className={classes.title} style={theme === "#393939" 
                    ? { backgroundColor: `${textColor}52`, color: 'white' } 
                    : { backgroundColor: `${textColor}99`, color: 'black' }}>
                Yodel
            </h1>

            {/* Word Boxes */}
            <div className={classes.container} style={theme === "#393939"
                    ? { backgroundColor: 'rgb(41, 41, 41)', color: 'white' }
                    : { backgroundColor:'rgb(41, 41, 41, 0.20)', color: 'black'}}>
                
                {/* Word Row */}
                {[0,1,2,3,4,5,6,7].map((row, rowIndex) =>(
                    <div className={classes.row} key={rowIndex}>

                        {/* Individual Word Box */}
                        {[0,1,2,3].map((box, boxIndex) => (
                            <div className={classes.box} key={boxIndex}>
                                {boxCharacters[rowIndex*4 + boxIndex]}
                            </div>
                        ))}

                        {/* Results Columns */}
                        <div className={classes.results} key={`results-${rowIndex}`}>
                            <div className={classes.yodel} key={`yodel-${rowIndex}`} style={resultBox[rowIndex*2] > 0 
                            ? { backgroundColor: '#248521', color: 'black' }
                            : { backgroundColor:'#8c8f92', color: 'black'}}>
                                {resultBox[rowIndex*2]}
                            </div>
                            <div className={classes.echo} key={`echo-${rowIndex}`} style={resultBox[rowIndex*2 + 1] > 0 
                            ? { backgroundColor: '#ecf00c', color: 'black' }
                            : { backgroundColor:'#8c8f92', color: 'black'}}>
                                {resultBox[rowIndex*2 + 1]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Keyboard handleKeyPress={handleKeyPress}/>
        </div>
    )
}

export default Yodel