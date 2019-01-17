import React ,{Component} from 'react';

class Questions extends React.Component {
    render() {
        return (
            <div className="shadow-lg p-3 mb-5  rounded" >
                <h1>what is the {this.props.Number1} X {this.props.Number2}</h1>
            </div>
        )
    }
}
export default Questions;