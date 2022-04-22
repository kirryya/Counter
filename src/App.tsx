import React, {ChangeEvent, useEffect, useState} from 'react';
import Display from "./components/Display";
import Button from "./components/Button";
import s from "./App.module.css"
import InputForm from './components/InputForm';
import InputPart from './components/InputPart';
import DisplayPart from './components/DisplayPart';

function App() {

    const startCount = 0
    const maxCount = 5

    const [count, setCount] = useState<number>(startCount);
    const [start, setStart] = useState<number>(startCount)
    const [max, setMax] = useState<number>(maxCount);


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
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('startValue', JSON.stringify(start))
    }


    return (
        <div className={s.App}>
            <div>
                <InputPart
                    start={start}
                    max={max}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    setCounts={setCounts}
                />
            </div>
            <div className={s.Display}>
                <DisplayPart
                    count={count}
                    start={start}
                    max={max}
                    onClickInc={onClickInc}
                    onClickReset={onClickReset}
                />
            </div>
        </div>
    );
}

export default App;
