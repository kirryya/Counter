import React, {ChangeEvent, useState} from 'react';
import Display from "./Display";
import Button from "./Buttons";
import s from "./App.module.css"

function App() {

    let countStart = 0
    let countMax = 10

    const [count, setCount] = useState<number>(countStart);
    const [start, setStart] = useState<number>(countStart)
    const [max, setMax] = useState<number>(countMax);

    countStart = start
    countMax = max

    const onClickInc = () => {
        if (count < countMax) {
            setCount(count + 1)
        }
    }

    const onClickReset = () => {
        setCount(countStart)
    }

    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let titleStart = Number(e.currentTarget.value)
        setStart(titleStart)
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let titleMax = Number(e.currentTarget.value)
        setMax(titleMax)
    }

    const setCounts = () => {
        setCount(start)
    }


    const error = start === max || max < start

    const disableSet = start === max || max < start
    const disableInc = max === count || disableSet
    const disableReset = start === count || disableSet

    const errorMessage = "Введите корректные данные"


    return (
        <div className={s.App}>
            <div>
                <div className={s.EnterDisplay}>
                    <div className={error ? s.InputMaxError : s.InputMax}>
                        <span>max value: </span>
                        <input type={"number"} value={countMax} onChange={setMaxValue}/>
                    </div>
                    <div className={error ? s.InputStartError : s.InputStart}>
                        <span>start value: </span>
                        <input type={"number"} value={countStart} onChange={setStartValue}/>
                    </div>
                </div>
                <div className={s.Buttons}>
                    <Button className={s.button} disabled={disableSet} name={"set"} callback={setCounts}/>
                </div>
            </div>
            <div className={s.Display}>
                <div className={count === max ? s.CountActive : s.Count}>
                    {error ? <div style={{fontSize:"large", color:"red"}}>{errorMessage}</div> : <Display count={count}/>}
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
