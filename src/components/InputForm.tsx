import React from 'react';
import {ChangeEvent} from 'react';

export type InputFormType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputForm = (props: InputFormType) => {
    return (
        <>
            <span>{props.title}</span>
            <input type={"number"} value={props.value} onChange={props.onChange}/>
        </>
    );
};

export default InputForm;