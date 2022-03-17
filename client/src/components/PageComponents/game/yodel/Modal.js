import classes from './Modal.module.css'
import { ColorContext } from '../../../../store/color-context';
import { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_STATS } from "../../../utils/queries";

// Images
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
    const [width1, setWidth1] = useState(0);
    const [width2, setWidth2] = useState(0);
    const [width3, setWidth3] = useState(0);
    const [width4, setWidth4] = useState(0);
    const [width5, setWidth5] = useState(0);
    const [width6, setWidth6] = useState(0);
    const [width7, setWidth7] = useState(0);
    const [width8, setWidth8] = useState(0);

    const { loading, data } = useQuery(QUERY_STATS);

    useEffect(() => {
        if(!loading){
            let statData = data.allStats.stats[0];
            let dataArray = [statData.guess1, statData.guess2, statData.guess3, statData.guess4, statData.guess5, statData.guess6, statData.guess7, statData.guess8]
            let greatest = Math.max(...dataArray);
            let data1 = dataArray[0]*66/greatest;
            let data2 = dataArray[1]*66/greatest;
            let data3 = dataArray[2]*66/greatest;
            let data4 = dataArray[3]*66/greatest;
            let data5 = dataArray[4]*66/greatest;
            let data6 = dataArray[5]*66/greatest;
            let data7 = dataArray[6]*66/greatest;
            let data8 = dataArray[7]*66/greatest;

            if(greatest !== 0){
                setWidth1(data1);
                setWidth2(data2);
                setWidth3(data3);
                setWidth4(data4);
                setWidth5(data5);
                setWidth6(data6);
                setWidth7(data7);
                setWidth8(data8);
            }
        } else{
            console.log('Loading Data...')
        }

    })

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
                        <div className={classes.statSheet} style={theme === "#393939" 
                        ? { backgroundColor: `${textColor}52`, color: 'white' } 
                        : { backgroundColor: `${textColor}99`, color: 'black' }}>

                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>1 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width1}%`}}>{data.allStats.stats[0].guess1}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>2 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width2}%`}}>{data.allStats.stats[0].guess2}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>3 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width3}%`}}>{data.allStats.stats[0].guess3}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>4 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width4}%`}}>{data.allStats.stats[0].guess4}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>5 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width5}%`}}>{data.allStats.stats[0].guess5}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>6 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width6}%`}}>{data.allStats.stats[0].guess6}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>7 Guess: </h3>
                                <div className={classes.statBar} style={{width: `${width7}%`}}> {data.allStats.stats[0].guess7}</div>
                            </div>
                            <div className={classes.statistics}>
                                <h3 className={classes.statTitle}>Losses: </h3>
                                <div className={classes.statBar} style={{width: `${width8}%`}}> {data.allStats.stats[0].guess8}</div>
                            </div>
                        </div>
                        {/* ------------------------ */}

                        <div className={classes.buttonDiv}>
                            <div className={classes.playButton}>
                                <button className={classes.button} type="button" style={{backgroundColor: 'darkgreen', fontSize: '1.25rem'}} onClick={refresh}>Play Again</button>
                            </div>
                            <div className={classes.playButton}>
                                <button className={classes.button} type="button" style={{backgroundColor: '#ecf00c', fontSize: '1.25rem'}} onClick={() => setModalOff(true)}>Results</button>
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
                        <img className={classes.img} src={echo2} alt='2 Echoes Example'/>
                        <h3 className={classes.example}>Additionally, the 'D' and 'E' in 'TIDE' will each give a yodel.</h3>
                        <img className={classes.img} src={yodel2} alt='2 Yodels Example' />
                        <h3 className={classes.example}>With 'DAME' both 'D' and 'M' give echoes, while 'A' and 'E' give yodels</h3>
                        <img className={classes.img} src={echoYodel} alt='Mix of Yodels and Echoes Example' />
                        <h3 className={classes.example}>Finally when you guess the correct word 'MADE' you get 4 yodels</h3>
                        <img className={classes.img} src={solvedYodel} alt='Solved Yodel Example' />


                        
                        

                        <div className={classes.playButton}>
                            <button className={classes.button} type="button" style={{backgroundColor: 'darkgreen', fontSize: '1.25rem'}} onClick={informationOff}>Play Yodel</button>
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