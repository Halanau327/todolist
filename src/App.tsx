import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {TaskType} from "./TodoList";
import {v1} from "uuid";
import "./App.css"

function App() {
    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState<TaskType[]>([
        {id:v1(), title: "HTML & CSS", isDone: false},
        {id:v1(), title: "JS", isDone: false},
        {id:v1(), title: "REACT", isDone: false}
    ])

    const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
        // const newTask = tasks.find(t => t.id === taskId)
        // if (task) {
        //     task.isDone = newIsDone
        //     setTasks([...tasks])
        // }
        const newState = tasks.map(t => t.id === taskId ? {...t, isDone: taskStatus} : t)
        setTasks(newState)
    }

    const removeTask = (taskId: string) => {
        const filteredTasks = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        const newState = [newTask, ...tasks]
        setTasks(newState)
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      taskArray={tasks}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
