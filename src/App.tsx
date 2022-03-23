import React, {ChangeEvent, useEffect, useState} from 'react';
import Display from "./Display";
import Button from "./Buttons";
import s from "./App.module.css"

function App() {

    const startCount = 0
    const maxCount = 5

    const [count, setCount] = useState<number>(startCount);
    const [start, setStart] = useState<number>(startCount)
    const [max, setMax] = useState<number>(maxCount);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(start))
    }, [start])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(max))
    }, [max])

    useEffect(() => {
        let startAsString = localStorage.getItem('startValue')
        if (startAsString) {
            let newStart = JSON.parse(startAsString)
            setStart(newStart)
        }
    }, [])

    useEffect(() => {
        let maxAsString = localStorage.getItem('maxValue')
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString)
            setMax(newMax)
        }
    }, [])

    const onClickInc = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const onClickReset = () => {
        setCount(start)
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let titleMax = JSON.parse(e.currentTarget.value)
        setMax(titleMax)
    }

    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let titleStart = JSON.parse(e.currentTarget.value)
        setStart(titleStart)
    }

    const setCounts = () => {
        setCount(start)
    }


    const error = start === max || max < start || max < 0 || start < 0

    const disableSet = error
    const disableInc = max === count || disableSet
    const disableReset = start === count || disableSet

    const errorMessage = "Введите корректные данные"


    return (
        <div className={s.App}>
            <div>
                <div className={s.EnterDisplay}>
                    <div className={error ? s.InputStartError : s.InputStart}>
                        <span>start value: </span>
                        <input type={"number"} value={start} onChange={setStartValue}/>
                    </div>
                    <div className={error ? s.InputMaxError : s.InputMax}>
                        <span>max value: </span>
                        <input type={"number"} value={max} onChange={setMaxValue}/>
                    </div>
                </div>
                <div className={s.Buttons}>
                    <Button className={s.button} disabled={disableSet} name={"set"} callback={setCounts}/>
                </div>
            </div>
            <div className={s.Display}>
                <div className={count === max ? s.CountActive : s.Count}>
                    {error ? <div style={{fontSize: "large", color: "red"}}>{errorMessage}</div> :
                        <Display count={count}/>}
                </div>
                <div className={s.Buttons}>
                    <Button className={s.button} disabled={disableInc} name={"inc"} callback={onClickInc}/>
                    <Button className={s.button} disabled={disableReset} name={"reset"} callback={onClickReset}/>
                </div>
            </div>
        </div>
    );
}

export default App;
