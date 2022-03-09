import { useContext } from 'react';
import 'codemirror/lib/codemirror.css';  //improts all styles like theme for codemirror
import 'codemirror/theme/material.css';  //css styles for material theme
import 'codemirror/mode/javascript/javascript';  //for running javascript
import { Controlled as ControlledEditor } from 'react-codemirror2';

import classes from './TextEditor.module.css';

import { ColorContext } from '../../../store/color-context';

const TextEditor = ({ value, onChange }) => {
    const [textColor] = useContext(ColorContext)

    let handleChange = (editor, data, value) => {
        onChange(value)
    }

    return <div className={classes.editor_container}>
                <div className={classes.editor_header} style={{ backgroundColor: textColor, color: 'white' }}>
                    <h1>ALGORITHM TITLE</h1>
                </div>
                <ControlledEditor
                    className={classes.codeMirror_wrapper}
                    onBeforeChange={handleChange}
                    value={value}
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: 'javascript',
                        lineNumbers: true,
                        theme: 'material'
                    }}
                />
            </div>

}

export default TextEditor