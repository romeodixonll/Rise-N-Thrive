import classes from './TaskList.module.css'

import trashCanWhite from '../../../../assets/images/trashcan-white.png'

let typingTimer

const TaskList = (props) => {

    const enableEditingHandler = (e) => {
        e.target.setAttribute('contentEditable', true);
    }

    const uploadChanges = () => {
        console.log('timer done')
    }

    let keyUpEvent = () => {
        clearTimeout(typingTimer);
        console.log('typed a letter')
        typingTimer = setTimeout(uploadChanges, 2000)
    }

    let keyDownEvent = () => {
        clearTimeout(typingTimer)
    }

    return (
        <ul className={classes.ul}>
            {props.tasks.map((task, i) => <li key={task._id}>
                <div>
                    <input
                        type='checkbox'
                        id={task._id}
                        checked={task.completed}
                        onChange={() => props.updateTaskStatus(task._id)}
                        onKeyPress={keyUpEvent}
                        onKeyDown={keyDownEvent}
                        tabIndex="0"
                    />
                    <label
                        id={task._id}
                        onClick={enableEditingHandler}
                    >{task.taskItem}
                    </label>
                </div>
                {props.deleteActive && <button onClick={() => props.deleteTask(task.id)}>
                    <img src={trashCanWhite} />
                </button>
                }
            </li>
            )}
        </ul>
    )
}

export default TaskList