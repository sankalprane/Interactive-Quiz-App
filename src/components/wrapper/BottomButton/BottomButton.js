import React from 'react'
import './BottomButton.css'

export default function BottomButton(props) {

    function Button() {
        // console.log("rendered");
        if (!props.submitted) {
            if (props.selectedOption !== -1) {
                return <div onClick={props.callsubmit} className="bottom-button submit-button">Submit</div>
            } else {
                return <div className="bottom-button submit-button">Submit</div>
            }
        } else {
            return <div onClick={props.nextQuestion} className="bottom-button next-button">Next</div>
        }
    }

    return (
        <Button/>
    )
}
