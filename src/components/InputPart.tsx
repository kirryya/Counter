import React from 'react';
import Button from './Button';
import InputForm, { InputFormType } from './InputForm';
import s from "../App.module.css"
import { ChangeEvent } from 'react';

type InputPartType = {
    error: boolean
    startvalue: number
    maxvalue: number
    setStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setCounts: () => void
}



const InputPart = (props: InputPartType) => {

    return (
        <div>
            <div className={s.EnterDisplay}>
                <div className={props.error ? s.InputStartError : s.InputStart}>
                    <InputForm title={"start value: "} value={props.startvalue} onChange={props.setStartValue}/>
                </div>
                <div className={props.error ? s.InputMaxError : s.InputMax}>
                    <InputForm title={"max value: "} value={props.maxvalue} onChange={props.setMaxValue}/>
                </div>
            </div>
            <div className={s.Buttons}>
                <Button className={s.button} disabled={props.error} name={"set"} callback={props.setCounts}/>
            </div>

        </div>
    );
};

export default InputPart;