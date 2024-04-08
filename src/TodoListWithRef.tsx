import {Button} from "./components/Button";
import {useRef, useState} from "react";

type FilterValueType = "all" | "active" | "completed"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    taskArray: TaskType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export const TodoList = ({title, taskArray, removeTask, addTask}: TodoListPropsType) => {
    const [filter, setFilter] = useState<FilterValueType>("all")

    const taskTitleInput = useRef<HTMLInputElement>(null)


    const getTasksForTodoList = (tasks: TaskType[], filterValue: FilterValueType) => {
        switch (filterValue) {
            case "active":
                return tasks.filter((t) => t.isDone === false)
            case "completed":
                return tasks.filter((t) => t.isDone === true)
            default:
                return tasks;
        }
    }

    const tasksForTodoList = getTasksForTodoList(taskArray, filter)

    const tasksList = tasksForTodoList.map((task) => {
        const removeTaskHandler = () => removeTask(task.id)
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <Button title="x" onClick={removeTaskHandler}/>
            </li>
        )
    })


    const onClickHandlerCreactor = (filter:FilterValueType) => {
        return () => setFilter(filter)
    }
    const onClickAddTaskHandler = () => {
        if (taskTitleInput.current) {
            const newTaskTitle = taskTitleInput.current.value
            addTask(newTaskTitle)
            taskTitleInput.current.value = ""
        }
    }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input ref={taskTitleInput}/>
                <Button title="+" onClick={onClickAddTaskHandler}/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button title={'All'} onClick={onClickHandlerCreactor("all")}/>
                <Button title={'Active'} onClick={onClickHandlerCreactor("active")}/>
                <Button title={'Completed'} onClick={onClickHandlerCreactor("completed")}/>
            </div>
        </div>
    )
}
