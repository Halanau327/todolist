import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {TaskType} from "./TodoList";

function App() {
    const todoListTitle = "What to learn"

    const [tasks, setTasks] = useState<TaskType[]>([
        {id:1, title: "HTML & CSS", isDone: true},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "REACT", isDone: false}
    ])

    const removeTask = (taskId:number) => {
        const filteredTasks = tasks.filter((task) => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle} taskArray={tasks} removeTask={removeTask} />
        </div>
    );
}

export default App;






















// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, TodoList} from "./TodoList";
//
// function App() {
//     const todoListTitle = "What to learn"
//     // state - ключевые данные
//
//     const [tasks, setTasks] = useState<Array<TaskType>>([
//         {id:1, title: "HTML & CSS", isDone: true},
//         {id:2, title: "JS", isDone: true},
//         {id:3, title: "REACT", isDone: false}
//     ])
//
//     const deleteTask = (taskId: number) => {
//         const newState = tasks.filter(t => t.id !== taskId)
//         setTasks(newState)
//     }
// // local state
//
//     return (
//         <div className="App">
//             <TodoList title={todoListTitle}
//                       tasks={tasks}
//                       removeTask={deleteTask}/>
//         </div>
//     );
// }
//
// export default App;
