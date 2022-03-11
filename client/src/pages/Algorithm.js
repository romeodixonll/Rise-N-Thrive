import { useState, useContext } from 'react';

import classes from './Algorithm.module.css'

import TextEditor from '../components/PageComponents/algorithm/TextEditor/TextEditor'
import CompletionHistory from '../components/PageComponents/algorithm/CompletionHistory/CompletionHistory';
import Card from '../components/UI/Card'
import CodeOutput from '../components/PageComponents/algorithm/CodeOutput/CodeOutput';
import Instructions from '../components/PageComponents/algorithm/Instructions/Instructions';

const Algorithm = () => {
    const [code, setCode] = useState('');
    const [correct, setCorrect] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    return <div className={`${classes.flex} page`} style={{ height: '94vh' }}>
        <div className={classes.flex_column}>
            <div className={classes.row1}>
                <div className={classes.column1}>
                    <TextEditor
                        value={code}
                        onChange={setCode}
                    />
                    <div className={classes.row3}>
                        <button>RUN</button>
                        <p>INCORRECT</p>
                    </div>
                </div>
                <Instructions />
            </div>
            <div className={classes.row2}>
                <CodeOutput />
                <CompletionHistory />
            </div>
        </div>
    </div>
}

export default Algorithm