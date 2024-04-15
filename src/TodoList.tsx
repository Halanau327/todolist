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
    changeTaskStatus: (taskId: string, newIsDone: boolean) => void
}

export const TodoList = ({title, taskArray, removeTask, addTask, changeTaskStatus}: TodoListPropsType) => {

    const [filter, setFilter] = useState<FilterValueType>("all")
    const [taskTitle, setTaskTitle] = useState("") // state хранит введенное значение для новой таски
    const [taskInputError, setTaskInputError] = useState <string | null>(null)

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

    const isTitleTooLong = taskTitle.length >= 15
    const ifTaskCanAdded = taskTitle && !isTitleTooLong

    const tasksList: Array<JSX.Element> | JSX.Element = tasksForTodoList.length
        ? tasksForTodoList.map((task) => {
            const onClickRemoveTaskHandler = () => removeTask(task.id)
            const onChangeTaskStatusHandler = (event:ChangeEvent<HTMLInputElement>) => changeTaskStatus(task.id, event.currentTarget.checked)

            return (
                <li key={task.id}>
                    <input type="checkbox"
                           onChange={onChangeTaskStatusHandler}/>
                    <span className={task.isDone ? "task-done" : "task"}>{task.title}</span>
                    <Button title="x" onClick={onClickRemoveTaskHandler}/>
                </li>
            )
        })
        : <div>Your tasksList is empty</div>

    const onClickHandlerCreator = (filter:FilterValueType) => {
        return () => setFilter(filter)
    }

    const onClickAddTaskHandler = () => {
        const trimmedTaskTitle = taskTitle.trim()
        if (trimmedTaskTitle) {
            addTask(trimmedTaskTitle)
            setTaskTitle("")
        } else {
            setTaskInputError("Title is required")
        }
    }

    const onChangeSetTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const onKeyDownAddTaskHandler = (event: KeyboardEvent) => {
        if (taskTitle.trim() === "") {
            return;
        }
        if (event.key === "Enter" || !taskTitle && !isTitleTooLong) {
            onClickAddTaskHandler()
        }
    }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input
                    className={"task-input-error" ? "task-input-error" : ""}
                    value={taskTitle}
                    onChange={onChangeSetTaskTitle}
                    onKeyDown={onKeyDownAddTaskHandler}
                />
                <Button title="+" onClick={onClickAddTaskHandler} disabled={!taskTitle || isTitleTooLong}/>
                {!!taskInputError && <div className="task-input-error-message">{taskInputError}</div>}


            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button styles={filter === "all" ? "filter-btn-active" : ""}
                        title={'All'}
                        onClick={onClickHandlerCreator("all")}/>
                <Button styles={filter === "active" ? "filter-btn-active" : ""}
                        title={'Active'}
                        onClick={onClickHandlerCreator("active")}/>
                <Button styles={filter === "completed" ? "filter-btn-active" : ""}
                        title={'Completed'}
                        onClick={onClickHandlerCreator("completed")}/>
            </div>
        </div>
    )
}
