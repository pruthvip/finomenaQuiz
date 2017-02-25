import React, {Component} from 'react';
import {QuizItem, ConsolidatedScore} from './modules';


export default class App extends Component {
    constructor(props) {
        super(props);

        // state


        this.state = {
            currentQuestionIndex: 0,
            userResponse: [],
            quizOver: false
        };

        // functions to bind
        this.onOptionSelect = this.onOptionSelect.bind(this);
    }

    onOptionSelect(optionId) {
        let quizOver = false;

        // save the user response
        const currentResponse = {
            quesId: this.props.quiz[this.state.currentQuestionIndex].id,
            responseId: optionId
        };

        if (this.state.userResponse.length === this.props.quiz.length) {
            quizOver = true;
        }


        // delaying by 3 sec for the fake api call
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    currentQuestionIndex: prevState.currentQuestionIndex + 1,
                    userResponse: prevState.userResponse.concat([currentResponse]),
                    quizOver: quizOver
                }
            })
        }, 1500);
    }


    renderQuizResponse() {
        return null;

        // if (this.state.quizOver) {
        //     return (
        //         <ConsolidatedScore
        //             quiz:/>
        //     )
        // }

    }


    renderQuiz() {
        const currentQuizItem = this.props.quiz[this.state.currentQuestionIndex];

        if (currentQuizItem && !this.state.quizOver) {
            return (
                <QuizItem
                    quizData={currentQuizItem}
                    onOptionSelect={this.onOptionSelect}
                />
            );
        }

        return null;
    }


    render() {
        return(
            <div>
                <h1>
                    Quiz It
                </h1>
                {this.renderQuizResponse()}
                {this.renderQuiz()}
            </div>
        );
    }

}

