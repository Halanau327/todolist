import {ChangeEvent, useState} from "react";


export const Counter = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(10)
    const [count, setCount] = useState(startValue)

    const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const stValue = Number(e.currentTarget.value)
        setStartValue(stValue)
        setCount(stValue)
    }

    const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value);
        setMaxValue(value);

    };


    const increment = () => {
        count === maxValue ? alert('Maximum value reached!') : setCount(count + 1)
    }



    return (
        <div>
            <label>
                Start Value: <input type="number" value={startValue} onChange={startValueChange} min={0} />
            </label>
            <br/>
            <label>
                Max Value: <input type="number" value={maxValue} onChange={handleMaxValueChange}/>
            </label>
            <br/>
            <button onClick={increment}>INC</button>
            <span>Count: {count}</span>
        </div>
    )
}

// это экзамен в конце понедельника, достаточно сложный  ну или легкий смотря с какой базой приешел. суть в том что пользователь вводит минимальное или максимальное значение и ты его сетаешь. вешаешь кнопку на увелечение и когда дошло до максимального значения счетчик пишет алерт