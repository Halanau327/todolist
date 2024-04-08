import {Button} from "./components/Button";
import {ChangeEvent, useState, KeyboardEvent} from "react";

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

    const [taskTitle, setTaskTitle] = useState("")

    // const isTitleTooLong = taskTitle.length >= 15
    // const ifTaskCanAdded = taskTitle && !isTitleTooLong


    const tasksList: Array<JSX.Element> | JSX.Element = tasksForTodoList.length
        ? tasksForTodoList.map((task) => {
            const onClickRemoveTaskHandler = () => removeTask(task.id)
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button title="x" onClick={onClickRemoveTaskHandler}/>
                </li>
            )
        })
        : <div>Your tasksList is empty</div>


    const onClickHandlerCreator = (filter:FilterValueType) => {
        return () => setFilter(filter)
    }

    const onClickAddTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    const onChangeSetTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const onKeyDownAddTaskHandler = (e: KeyboardEvent) => {
        if (e.key === "Enter" || !taskTitle && (taskTitle.length >= 15)) {
            onClickAddTaskHandler()
        }
    }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={onChangeSetTaskTitle}
                    onKeyDown={onKeyDownAddTaskHandler}
                />
                <Button title="+" onClick={onClickAddTaskHandler} disabled={!taskTitle || (taskTitle.length >= 15)}/>
                {/*{taskTitle.length > 15 && <div>Your task title is too long</div>}*/}
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button title={'All'} onClick={onClickHandlerCreator("all")}/>
                <Button title={'Active'} onClick={onClickHandlerCreator("active")}/>
                <Button title={'Completed'} onClick={onClickHandlerCreator("completed")}/>
            </div>
        </div>
    )
}
