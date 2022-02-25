import React, {useState} from 'react';
import './App.css';
import Display from "./Display";
import Button from "./Buttons";

function App() {

    const countMin = 0
    const countMax = 5

    const [count, setCount] = useState<number>(countMin);

    const onClickInc = () => {
        if (count < countMax) {
            setCount(count + 1)
        }
    };

    const onClickReset = () => {
        setCount(countMin)
    };

    const disableInc = countMax === count;
    const disableReset = countMin === count;

    return (
        <div className="App">
            <div className={count === countMax ? "Count-active" : "Count"}>
                <Display count={count}/>
            </div>
            <div className="Buttons">
                <Button disabled={disableInc} name={"inc"} callback={onClickInc}/>
                <Button disabled={disableReset} name={"reset"} callback={onClickReset}/>
            </div>
        </div>
    );
}

export default App;
