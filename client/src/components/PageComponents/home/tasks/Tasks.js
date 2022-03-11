import { useContext, useState } from 'react'

import classes from './Tasks.module.css'

import Card from '../../../UI/Card'
import TaskList from './TaskList'
import { ColorContext } from '../../../../store/color-context'

const dummyTasks = [
    {
        id:0,
        task: 'Make bed',
        finished: false,
    },
    {
        id:1,
        task: 'Run for 15 minutes',
        finished: false,
    },
    {
        id:2,
        task: 'Eat',
        finished: false,
    },
    {
        id:3,
        task: 'Pet Chaco',
        finished: false,
    }
]

let nextid = dummyTasks[dummyTasks.length - 1].id

const Task = () => {
    const [tasks, setTasks] = useState(dummyTasks)
    const [deleteActive, setDeleteActive] = useState(false)
    const [ , ,theme] = useContext(ColorContext)
    const addTaskHandler = () => {
        setTasks([...tasks, {id:nextid,task:'Double Click to Edit',finished:false}])
        nextid++
        
    }

    const deleteModeHandler = () => {
        deleteActive ? setDeleteActive(false) : setDeleteActive(true)
    }

    const deleteTask = (id) => {
        const updatedTaskList = [...tasks].filter((item) => item.id !== id);
        setTasks(updatedTaskList)
    }

    const updateTaskStatus = (id) => {
        let updatedTaskList = [...tasks]
        let taskIndex = updatedTaskList.findIndex((task => task.id == id))
        updatedTaskList[taskIndex].finished = !updatedTaskList[taskIndex].finished
        setTasks(updatedTaskList)
    }

    const updateTaskName = (id, value) => {
        let updatedTaskList = [...tasks]
        let taskIndex = updatedTaskList.findIndex((task => task.id == id))
        updatedTaskList[taskIndex].task = value
        setTasks(updatedTaskList)
    }

    return <Card className={classes.card} style={theme === "#393939"
    ? { backgroundColor: 'rgb(41, 41, 41)', color: 'white' }
    : { backgroundColor:'rgb(41, 41, 41, 0.20)', color: 'black'}}>
        <h2>Did you...</h2>
        <TaskList 
        tasks={tasks} 
        deleteActive={deleteActive} 
        deleteTask={deleteTask} 
        updateTaskStatus={updateTaskStatus}
        updateTaskName={updateTaskName}
        />
        <div className={classes.taskButtons} >
            <button 
            onClick={addTaskHandler}
            style={theme=="#393939" ? {color:'white'} : {color:'black'}}
            >add task</button>
            <button 
            onClick={deleteModeHandler}
            style={theme=="#393939" ? {color:'white'} : {color:'red'}}
            >delete task</button>
        </div>
    </Card>
};

export default Task;