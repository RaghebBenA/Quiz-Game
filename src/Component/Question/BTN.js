import React ,{Component} from 'react';

const BTN = (props) => {
    return (
        <div>
            <button id="btn"  onClick={props.click}>{props.choice}</button>
        </div>
    )
}

export default BTN;