import { useContext, useEffect, useState } from 'react'

import classes from './Tasks.module.css'

import { useMutation } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { ADD_TASK } from '../../../utils/mutations'
import { QUERY_TASKS } from '../../../utils/queries'

import Card from '../../../UI/Card'
import TaskList from './TaskList'
import { ColorContext } from '../../../../store/color-context'

import Auth from '../../../utils/auth'

const Task = () => {
    const [deleteActive, setDeleteActive] = useState(false)
    const [, , theme] = useContext(ColorContext)

    
    const { loading, data } = useQuery(QUERY_TASKS)
    const tasksArray = data?.allTasks.tasks || []

    
    const [tasks, setTasks] = useState([])
    console.log(tasks)
    const [addTask, { error }] = useMutation(ADD_TASK, {
        update(cache, { data: { addTask } }) {
            try {
                const { tasks } = cache.readQuery({ query: QUERY_TASKS });
                cache.writeQuery({
                    query: QUERY_TASKS,
                    data: { tasks: [tasks, addTask] }
                })
            } catch (err) {
                console.error(err)
            }
        }
    })

    const addTaskHandler = async () => {
        console.log('adding')
        try {
            const { data } = await addTask({
                variables: {
                    task: 'Double click to edit',
                    userId: Auth.getProfile().data._id
                }
            })
            console.log(data)
        } catch (err) {
            console.error(err)
        }
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
        : { backgroundColor: 'rgb(41, 41, 41, 0.20)', color: 'black' }}>
        <h2>Did you...</h2>
        {loading ? 
        <div></div> :
        <TaskList
            tasks={tasks}
            deleteActive={deleteActive}
            deleteTask={deleteTask}
            updateTaskStatus={updateTaskStatus}
            updateTaskName={updateTaskName}
        />
        }
        <div className={classes.taskButtons} >
            <button
                onClick={addTaskHandler}
                style={theme == "#393939" ? { color: 'white' } : { color: 'black' }}
            >add task</button>
            <button
                onClick={deleteModeHandler}
                style={theme == "#393939" ? { color: 'white' } : { color: 'red' }}
            >delete task</button>
        </div>
    </Card>
};

export default Task;