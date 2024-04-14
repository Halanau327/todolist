import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {TaskType} from "./TodoList";
import {v1} from "uuid";

function App() {
    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState<TaskType[]>([
        {id:v1(), title: "HTML & CSS", isDone: true},
        {id:v1(), title: "JS", isDone: true},
        {id:v1(), title: "REACT", isDone: false}
    ])

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
            />
        </div>
    );
}

export default App;
