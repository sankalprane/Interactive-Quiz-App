import React, { useState } from 'react';
import './AttemptQuestion.css'
import Header from '../Header/Header';
import BottomButton from '../BottomButton/BottomButton';

export default function AttemptQuestion() {

    const [selectedOption, setSelectedOption] = useState(-1);

    const [submitted, setSubmitted] = useState(false);
    // var submitted = false;

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
                <div className="question-div"> Some Question </div>

                <div className="divider"></div>

                <div className="bottom-options-div">
                    <div 
                        onClick={() => setOption(1)} 
                        className={'option-div '+ (selectedOption === 1 ? 'selected-option-div' : '')}>
                    Option1</div>
                    <div 
                        onClick={() => setOption(2)} 
                        className={'option-div '+ (selectedOption === 2 ? 'selected-option-div' : '')}>
                    Option2</div>
                    <div 
                        onClick={() => setOption(3)} 
                        className={'option-div '+ (selectedOption === 3 ? 'selected-option-div' : '')}>
                    Option3</div>
                    <div 
                        onClick={() => setOption(4)} 
                        className={'option-div '+ (selectedOption === 4 ? 'selected-option-div' : '')}>
                    Option4</div>
                </div>

                <BottomButton submitted={submitted} callsubmit={submit}/>
            </div>
        </div>
    )
}
