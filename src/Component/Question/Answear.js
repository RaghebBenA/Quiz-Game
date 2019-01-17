import React ,{Component} from 'react';

function Answears(props) {
    return (
        <div className="answears">
            <h3 className="correct">Correct:{props.result}</h3>
            <h3 className="Incorrect">Incorrect:{props.fail}</h3>
        </div>
    )
}
export default Answears;