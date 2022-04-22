import React from 'react';
import s from "../App.module.css"
import Button from './Button';
import Display from './Display';

type DisplayPartType = {
    count: number
    max: number
    start: number
    onClickInc:() => void
    onClickReset: () => void
}



const DisplayPart = (props: DisplayPartType) => {

    const error = props.start === props.max || props.max < props.start || props.max < 0 || props.start < 0
    const errorMessage = "Введите корректные данные"

    return (
        <div>
            <div className={props.count === props.max ? s.CountActive : s.Count}>
                {error ?
                    <div style={{fontSize: "large", color: "red"}}>{errorMessage}</div>
                    : <Display count={props.count}/>}
            </div>
            <div className={s.Buttons}>
                <Button className={s.button} disabled={props.max === props.count || error} name={"inc"} callback={props.onClickInc}/>
                <Button className={s.button} disabled={props.start === props.count || error} name={"reset"} callback={props.onClickReset}/>
            </div>
        </div>
    );
};

export default DisplayPart;