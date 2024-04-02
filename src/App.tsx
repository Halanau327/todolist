import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {
    const todoListTitle = "What to learn"
    // state - ключевые данные

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id:1, title: "HTML & CSS", isDone: true},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "REACT", isDone: false}
    ])

    const deleteTask = (taskId: number) => {
        const newState = tasks.filter(t => t.id !== taskId)
        setTasks(newState)
    }
// local state

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={tasks}
                      removeTask={deleteTask}/>
        </div>
    );
}

export default App;
