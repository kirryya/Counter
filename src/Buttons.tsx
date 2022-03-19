import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
    className?: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.className} disabled={props.disabled} onClick={props.callback}>{props.name}</button>
    );
};

export default Button;