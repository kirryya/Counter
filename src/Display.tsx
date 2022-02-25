import React from 'react';

type DisplayPropsType = {
    count: number
}

const Display = (props: DisplayPropsType) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

export default Display;