import { useState, useContext } from 'react';

import classes from './Algorithm.module.css'

import TextEditor from '../components/PageComponents/algorithm/TextEditor/TextEditor'
import CompletionHistory from '../components/PageComponents/algorithm/CompletionHistory/CompletionHistory';
import Card from '../components/UI/Card'
import CodeOutput from '../components/PageComponents/algorithm/CodeOutput/CodeOutput';
import Instructions from '../components/PageComponents/algorithm/Instructions/Instructions';

const Algorithm = () => {
    const [code, setCode] = useState(`let userOutputEl = document.getElementById("userOutput");\n\n// insert code below\nconst plusOne = () => {}\n\nuserOutputEl.textContent = plusOne();`);

    const srcDoc = `
    <html>
    <body>
    <h2>Your Output</h2>
    <p id="userOutput"></p>
    </body>
    <script>${code}</script>
    </html>
    `

    return <div className={`${classes.flex} page`} style={{ height: '94vh' }}>
    <div className={classes.flex_column}>
        <div className={classes.row1}>
            <div className={classes.column1}>
                <TextEditor
                    value={code}
                    onChange={setCode}
                />
                <div className={classes.row3}>
                    <button>MARK COMPLETED</button>
                    <p>RESET CODE</p>
                </div>
            </div>
            <Instructions />
        </div>
        <div className={classes.row2}>
            <CodeOutput srcDoc={srcDoc}/>
            <CompletionHistory />
        </div>
    </div>
</div>
}

export default Algorithm