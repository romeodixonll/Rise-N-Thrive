import classes from './Modal.module.css'
import { ColorContext } from '../../../../store/color-context';
import { useState, useEffect, useContext } from 'react';
import echo2 from '../../../../assets/images/game-images/yodel/echo2.png'
import yodel2 from '../../../../assets/images/game-images/yodel/yodel2.png'
import echoYodel from '../../../../assets/images/game-images/yodel/echo-yodel.png'
import solvedYodel from '../../../../assets/images/game-images/yodel/solved-yodel.png'


const modalTypes = [
    {
        title: 'Yodel!!!',
        subTitle: 'Congrats you guessed the word correctly!',
        dialog: 'You guessed the word in: '
    },
    {
        title: 'Game Over',
        subTitle: 'You did not guess the word in the given tries...',
        dialog: 'Better luck next time!'
    }
]

let modalInfo = modalTypes[0];

const Modal = ({ answer, currentRow, winState, lossState, informationState, refresh, informationOff}) => {
    const [textColor, , theme] = useContext(ColorContext);
    const [modalOff, setModalOff] = useState(false);


    if(winState || lossState){
        if(winState){
            modalInfo = modalTypes[0];
        } else if (lossState){
            modalInfo = modalTypes[1];
        }
        
        return (
            <div style={modalOff ? {display: 'none'} : {display: 'block'}}>
                <div className={classes.modal}  style={theme === "#393939"
                    ? { backgroundColor: 'rgb(41, 41, 41)', color: 'white' }
                    : { backgroundColor:'rgb(125, 125, 125)', color: 'black'}}>

                    <div className={classes.innerModal}>
                        <h1 className={classes.title} style={theme === "#393939" 
                        ? { backgroundColor: `${textColor}52`, color: 'white' } 
                        : { backgroundColor: `${textColor}99`, color: 'black' }}>
                            {/* Title text */}
                            {modalInfo.title}
                        </h1>

                        {/* Subtitle and Dialog */}
                        <h3 className={classes.subtitle}>{modalInfo.subTitle}</h3>
                        <h3 className={classes.subtitle}>{`\'${answer}\'`}</h3>
                        <h3 className={classes.dialog}>{modalInfo.dialog} {winState ? `${currentRow} tries!` : `` }</h3>
                        
                        {/* Possible User History... */}
                        <div>

                        </div>
                        {/* ------------------------ */}

                        <div className={classes.buttonDiv}>
                            <div className={classes.button}>
                                <button type="button" style={{backgroundColor: 'darkgreen', fontSize: '1.25rem'}} onClick={refresh}>Play Again</button>
                            </div>
                            <div className={classes.button}>
                                <button type="button" style={{backgroundColor: '#ecf00c', fontSize: '1.25rem'}} onClick={() => setModalOff(true)}>Results</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }else if(informationState){
        return(
            <div>
                <div className={classes.modal}  style={theme === "#393939"
                    ? { backgroundColor: 'rgb(41, 41, 41)', color: 'white' }
                    : { backgroundColor:'rgb(125, 125, 125)', color: 'black'}}>

                    <div className={classes.innerModal}>
                        <h1 className={classes.title} style={theme === "#393939" 
                        ? { backgroundColor: `${textColor}52`, color: 'white' } 
                        : { backgroundColor: `${textColor}99`, color: 'black' }}>
                            {/* Title text */}
                            Instructions
                        </h1>

                        {/* Subtitle and Dialog */}
                        <h3 className={classes.subtitle} style={{marginBottom: '1.5rem', fontSize: '1.25rem'}}>Welcome to Yodel!</h3>
                        <h3 className={classes.instructions}>To win Yodel you must solve a 4 letter word.</h3>
                        <h3 className={classes.instructions}>You get an 'Echo' for every letter in your guessed word that the answer contains, but your letter is not in the correct position.</h3>
                        <h3 className={classes.instructions}>You get a 'Yodel' for every letter in your guessed word that is in the same position as the answer.</h3>
                        
                        <br></br>

                        {/* Examples */}
                        <h3 className={classes.example}>Example: If we guess 'DENS' when the answer is 'MADE' the 'D' and 'E' each give an echo.</h3>
                        <img src={echo2} alt='2 Echoes Example'/>
                        <h3 className={classes.example}>Additionally, the 'D' and 'E' in 'TIDE' will each give a yodel.</h3>
                        <img src={yodel2} alt='2 Yodels Example' />
                        <h3 className={classes.example}>With 'DAME' both 'D' and 'M' give echoes, while 'A' and 'E' give yodels</h3>
                        <img src={echoYodel} alt='Mix of Yodels and Echoes Example' />
                        <h3 className={classes.example}>Finally when you guess the correct word 'MADE' you get 4 yodels</h3>
                        <img src={solvedYodel} alt='Solved Yodel Example' />


                        
                        

                        <div className={classes.button}>
                            <button type="button" style={{backgroundColor: 'darkgreen', fontSize: '1.25rem'}} onClick={informationOff}>Play Yodel</button>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }else{
        return(
            <div style={{display: 'none'}}>
            </div>
        )
    }
}

export default Modal