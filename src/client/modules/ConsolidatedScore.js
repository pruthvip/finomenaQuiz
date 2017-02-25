import React, {Component} from 'react';

export default class ConsolidatedScore extends Component {
    constructor(props) {
        super(props);

        this.animateCard = true;


    }


    componentWillReceiveProps() {
        this.animateCard = true;
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


    renderQuizScore() {
        const cardClasses = ['card', 'card-animation'];

        return(
            <div className={cardClasses.join(' ')}>

            </div>
        );
    }


    render() {

        return (
            <div className="quiz-review">
                {this.renderQuizScore()}
                {this.renderQuizResponse()}
            </div>
        )
    }

}

