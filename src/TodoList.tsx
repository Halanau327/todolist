import {Button} from "./components/Button";
import {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    taskArray: TaskType[]
    removeTask: (taskId: number) => void
}

export const TodoList = ({title, taskArray, removeTask}: TodoListPropsType) => {
    const [filter, setFilter] = useState('all')

    let getTasksForTodoList = taskArray

    switch () {
        case
    }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+" onClick={()=>{}}/>
            </div>
            <ul>
                {taskArray.map((task) => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <Button title="x" onClick={() => removeTask(task.id)}/>
                        </li>
                    )
                })}
            </ul>
            <div>
           <Button title={'All'} onClick={()=>{}}/>
           <Button title={'Active'} onClick={()=>{}}/>
           <Button title={'Complited'} onClick={()=>{}}/>
            </div>
        </div>
    )
}


















// import React, {useState} from "react";
//
// export type FilterValuesType = "all" | "active" | "complited"
//
// type TodoListPropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     // changeTodoListFilter: (nextFilter:FilterValuesType) => void
// }
//
// export type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// export const TodoList = ({// changeTodoListFilter
//                              title, tasks, removeTask }: TodoListPropsType) => {
//
//     const [filter, setFilter] = useState<FilterValuesType>("active")
//
//     // const changeTodoListFilter = (nextFilter: FilterValuesType) => {
//     //     setFilter(nextFilter)
//     // }
//
//     // UI
//     const getTasksForTodoList = (allTasks: Array<TaskType>, nextFilterValue: FilterValuesType) => {
//         switch (nextFilterValue) {
//             case "active":
//                 return allTasks.filter(t => t.isDone === false);
//
//             case "complited":
//                 return allTasks.filter(t => t.isDone === true);
//
//             default:
//                 return allTasks;
//         }
//     }
//
//     const tasksForTodoList = getTasksForTodoList(tasks, filter)
//
//     const tasksList = tasksForTodoList.map(task => {
//         const removeTaskHandler = () => removeTask(task.id)
//         return (
//             <li>
//                 <input type="checkbox" checked={task.isDone}/>
//                 <span>{task.title}</span>
//                 <button onClick={removeTaskHandler}>x</button>
//             </li>
//         )
//     })
//
//     return (
//         <div className="todolist">
//             <h3>{title}</h3>
//             <div>
//                 <input/>
//                 <button>+</button>
//             </div>
//             <ul>
//                 {tasksList}
//             </ul>
//             <div>
//                 <button onClick={() => setFilter("all")}>All</button>
//                 <button onClick={() => setFilter("active")}>Active</button>
//                 <button onClick={() => setFilter("complited")}>Completed</button>
//             </div>
//         </div>
//     )
// }