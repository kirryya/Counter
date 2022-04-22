import React from 'react';
import Button from './Button';
import InputForm, { InputFormType } from './InputForm';
import s from "../App.module.css"
import { ChangeEvent } from 'react';

type InputPartType = {
    start: number
    max: number
    setStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setCounts: () => void
}

const InputPart = (props: InputPartType) => {

    const error = props.start === props.max || props.max < props.start || props.max < 0 || props.start < 0

    return (
        <div>
            <div className={s.EnterDisplay}>
                <div className={error ? s.InputStartError : s.InputStart}>
                    <InputForm title={"start value: "} value={props.start} onChange={props.setStartValue}/>
                </div>
                <div className={error ? s.InputMaxError : s.InputMax}>
                    <InputForm title={"max value: "} value={props.max} onChange={props.setMaxValue}/>
                </div>
            </div>
            <div className={s.Buttons}>
                <Button className={s.button} disabled={error} name={"set"} callback={props.setCounts}/>
            </div>

        </div>
    );
};

export default InputPart;