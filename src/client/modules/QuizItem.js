import React, {Component} from 'react';

export default class QuizItem extends Component {
    constructor(props) {
        super(props);

        this.animateCard = true;

        this.state = {
            btnClicked: false,
            selectedOptionId: null
        };

        // functions to bind
        this.onOptionSelect = this.onOptionSelect.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }


    componentWillReceiveProps() {
        this.animateCard = true;

        this.setState({
            btnClicked: false,
            selectedOptionId: null
        });
    }

    onOptionSelect (e) {

        // if a click is onGoing
        if (this.state.btnClicked) {
            return;
        }

        const selectedOptionId = parseInt(e.currentTarget.getAttribute('data-id'), 10);

        this.setState({
            selectedOptionId: selectedOptionId,
            btnClicked: true
        }, () => {
            this.props.onOptionSelect(selectedOptionId);
        });
    }


    renderOptions () {
        return (
            <ul className="display-t quiz-item__options">
                {this.props.quizData.options.map((o, i) => {

                    const buttonClassName = ['btn', 'quiz-item__options__value'];

                    console.log(o, this.state.selectedOptionId, this.state.btnClicked);

                    if (this.state.selectedOptionId === o.id && this.state.btnClicked) {
                        buttonClassName.push('ripple');
                        buttonClassName.push('ripple__effect');
                    }

                    return (
                        <li
                            className="display-td display-td--vm quiz-item__options__item"
                            key={i}
                        >
                            <button
                                className={buttonClassName.join(' ')}
                                data-id={o.id}
                                onClick={this.onOptionSelect}
                            >
                                {o.text}
                            </button>
                        </li>
                    );
                })}

            </ul>
        );

    }


    render() {
        const quizItemClassNames = ['card quiz-item'];

        if (this.animateCard) {
            quizItemClassNames.push('card-animation');

            this.animateCard = false;
        }

        return(
            <div className={quizItemClassNames.join(' ')}>
                <div className="quiz-item__question">
                    <div className="quiz-item__question__text">
                        {this.props.quizData.text}
                    </div>
                </div>

                <div className="quiz-item__options__ctn">
                    <div className=" quiz-item__options__icon">
                        <i className="fa fa-bolt" />
                    </div>
                    {this.renderOptions()}
                </div>
            </div>
        );
    }

}

