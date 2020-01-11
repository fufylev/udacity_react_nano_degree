import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        const [value1, value2, value3, proposedAnswer] = this.setNewValues();
        this.state = {
            value1,
            value2,
            value3,
            proposedAnswer,
            numQuestions: 0,
            numCorrect: 0
        };
        this.buttonsHandler = this.buttonsHandler.bind(this);
    }

    setNewValues() {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1, value2, value3, proposedAnswer]
    }

    makeNewSetOfNumbers(prevGameResult) {
        const [value1, value2, value3, proposedAnswer] = this.setNewValues();
        this.setState((prevState) => ({
            value1,
            value2,
            value3,
            proposedAnswer,
            numQuestions: prevState.numQuestions + 1,
            numCorrect: prevState.numCorrect + (prevGameResult === true ? 1 : 0)
        }))
    }

    buttonsHandler(event) {
        const {value1, value2, value3, proposedAnswer} = this.state;
        const sum = value1 + value2 + value3;
        const ifProposedAnswerIsCorrect = sum === proposedAnswer ? 'true' : 'false';
        const buttonPressedName = event.target.name;

        this.makeNewSetOfNumbers(ifProposedAnswerIsCorrect === buttonPressedName);
    }

    render() {
        const {value1, value2, value3, proposedAnswer, numQuestions, numCorrect} = this.state;
        console.log((value1 + value2 + value3), proposedAnswer);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="game">
                    <h2>Mental Math</h2>
                    <div className="equation">
                        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                    </div>
                    <button name="true" onClick={this.buttonsHandler}>True</button>
                    <button name="false" onClick={this.buttonsHandler}>False</button>
                    <p className="text">
                        Your Score: {numCorrect}/{numQuestions}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
