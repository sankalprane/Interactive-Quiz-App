import React, { useState, useEffect } from 'react';
import './AttemptQuestion.css'
import Header from '../Header/Header';
import BottomButton from '../BottomButton/BottomButton';

export default function AttemptQuestion(props) {

    const [selectedOption, setSelectedOption] = useState(-1);

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // console.log("hey");
        setSelectedOption(res => -1);
        setSubmitted(res => false);
    }, [props.id]);

    var singleQuestion = props.question;
    console.log(singleQuestion);

    function setOption(idx){
        if (!submitted) {
            setSelectedOption(idx);
        }
    }

    function submit() {
        setSubmitted(true);
    }

    return (
        <div className="main-body">
            <Header></Header>
            <div className="body-inner">
                <div className="question-div"> { singleQuestion.content } </div>

                <div className="divider"></div>

                <div className="bottom-options-div">
                    <div 
                        onClick={() => setOption(1)} 
                        className={'option-div '+ ( submitted && singleQuestion.answer === 1 ? 'correct-option-div ' : '') + ( submitted && selectedOption === 1 && singleQuestion.answer !== 1 ? 'wrong-option-div ' : '') + (selectedOption === 1 ? 'selected-option-div' : '')}>
                    { singleQuestion.option1 }</div>
                    <div 
                        onClick={() => setOption(2)} 
                        className={'option-div '+ ( submitted && singleQuestion.answer === 2 ? 'correct-option-div ' : '') + ( submitted && selectedOption === 2 && singleQuestion.answer !== 2 ? 'wrong-option-div ' : '') + (selectedOption === 2 ? 'selected-option-div' : '')}>
                    { singleQuestion.option2 }</div>
                    <div 
                        onClick={() => setOption(3)} 
                        className={'option-div '+  ( submitted && singleQuestion.answer === 3 ? 'correct-option-div ' : '') + ( submitted && selectedOption === 3 && singleQuestion.answer !== 3 ? 'wrong-option-div ' : '') + (selectedOption === 3 ? 'selected-option-div' : '')}>
                    { singleQuestion.option3 }</div>
                    <div 
                        onClick={() => setOption(4)} 
                        className={'option-div '+ ( submitted && singleQuestion.answer === 4 ? 'correct-option-div ' : '') + ( submitted && selectedOption === 4 && singleQuestion.answer !== 4 ? 'wrong-option-div ' : '') + (selectedOption === 4 ? 'selected-option-div' : '')}>
                    { singleQuestion.option4 }</div>
                </div>

                <BottomButton selectedOption={selectedOption} nextQuestion={props.nextQuestion} submitted={submitted} callsubmit={submit}/>
            </div>
        </div>
    )
}
