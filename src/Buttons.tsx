import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.disabled} onClick={props.callback}>{props.name}</button>
    );
};

export default Button;