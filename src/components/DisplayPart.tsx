import React from 'react';
import s from "../App.module.css"
import Button from './Button';
import Display from './Display';

type DisplayPartType = {
    error: boolean
    count: number
    max: number
    start: number
    onClickInc:() => void
    onClickReset: () => void
}

const errorMessage = "Введите корректные данные"

const DisplayPart = (props: DisplayPartType) => {
    return (
        <div>
            <div className={props.count === props.max ? s.CountActive : s.Count}>
                {props.error ?
                    <div style={{fontSize: "large", color: "red"}}>{errorMessage}</div>
                    : <Display count={props.count}/>}
            </div>
            <div className={s.Buttons}>
                <Button className={s.button} disabled={props.max === props.count || props.error} name={"inc"} callback={props.onClickInc}/>
                <Button className={s.button} disabled={props.start === props.count || props.error} name={"reset"} callback={props.onClickReset}/>
            </div>
        </div>
    );
};

export default DisplayPart;