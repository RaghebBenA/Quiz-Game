import React ,{Component} from 'react';
import Answears from './Answear';
import BTN from './BTN';
import Questions from './Questions';
import './App.css'



class Multiply extends React.Component {

    constructor(props) {
        super()
        this.state = {
            count: 0,
            countTwo: 0,
            cicked: false,
            number1: this.getRandom(10),
            number2: this.getRandom(10)
        }


    }

    getRandom = max =>
        Math.floor(Math.random() * Math.floor(max))

    handleClick(Choice, Result) {
        if (Choice == Result) {
            this.setState(prevState => ({
                count: prevState.count + 1,
                clicked: !prevState.clicked,
                number1: this.getRandom(10),
                number2: this.getRandom(10)
            }))
        }
        else {
            this.setState(prevState => ({
                clicked: !prevState.clicked,
                number1: this.getRandom(10),
                number2: this.getRandom(10),
                countTwo: prevState.countTwo + 1
            }))
        }
    }

    render() {
        let result = this.state.number1 * this.state.number2
        let choiceOne = this.getRandom(20)
        let choiceTwo = this.getRandom(20)
        let choiceThree = this.getRandom(10)
        let choiceArr = [
            choiceOne,
            choiceTwo,
            choiceThree,
            result
        ]
        let theChoice = choiceArr.sort(function () { return 0.5 - Math.random() });
        return (
            <div id="body">
                <Questions
                    Number1={this.state.number1}
                    Number2={this.state.number2}
                />
                <div className="btnOne">
                    <BTN
                        click={this.handleClick.bind(this, theChoice[0], result)}
                        choice={theChoice[0]}
                    />
                    <BTN
                        click={this.handleClick.bind(this, theChoice[1], result)}
                        choice={theChoice[1]}
                    />
                    <BTN
                        click={this.handleClick.bind(this, theChoice[2], result)}
                        choice={theChoice[2]}
                    />
                    <BTN
                        click={this.handleClick.bind(this, theChoice[3], result)}
                        choice={theChoice[3]}
                    />
                </div>
                <Answears result={this.state.count} fail={this.state.countTwo} />

            </div>
        );
    }
}
 export default Multiply;   