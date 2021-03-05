import React, { useState } from 'react'
import AttemptQuestion from '../AttemptQuestion/AttemptQuestion'
import Result from '../Result/Result'
import tapAudio from '../../../assets/sounds/select.wav'

export default function Questions() {

    const [questionNumber, setQuestionNumber] = useState(0);

    function nextQuestion() {
        setQuestionNumber(idx => idx + 1);
        selectSound();
    }

    function selectSound() {
        let sound = new Audio(tapAudio);
        sound.play();
    }

    function PageToDisplay() {
        if (questionNumber >= 10) {
            return <Result/>
        } else {
            return  <AttemptQuestion id={questionNumber} question={ questions[questionNumber]} nextQuestion={nextQuestion}/>
        }
    }

    const questions = [
        {
            "content": "How many time zones are there in Russia?",
            "option1": "11",
            "option2": "8",
            "option3": "14",
            "option4": "9",
            "answer": 1
        },
    
        {
            "content": "What’s the capital of Canada?",
            "option1": "New York",
            "option2": "Toronto",
            "option3": "Ottawa",
            "option4": "Rio de Janeiro",
            "answer": 2
        },
    
        {
            "content": "What’s the smallest country in the world?",
            "option1": "The Vatican",
            "option2": "REPUBLIC OF NAURU",
            "option3": "TUVALU",
            "option4": "Monaco",
            "answer": 2
        },
    
        {
            "content": "The first Bollywood film to go plastic-free is",
            "option1": "War",
            "option2": "Coolie No. 1",
            "option3": "Dream Girl",
            "option4": "Mission Mangal",
            "answer": 2
        },
    
        {
            "content": "Astronomers found how many asteroids that once belonged to a distant star system have been found orbiting the Sun between Jupiter and Neptune?",
            "option1": "12",
            "option2": "18",
            "option3": "19",
            "option4": "11",
            "answer": 3
        },
    
        {
            "content": "Which country will host the 2022 Women's Football Asian Cup?",
            "option1": "China",
            "option2": "India",
            "option3": "Pakistan",
            "option4": "Bangladesh",
            "answer": 2
        },
    
        {
            "content": "What is Indian Institute of Science rank in the Times Higher Education Asia University Ranking?",
            "option1": "36th",
            "option2": "46th",
            "option3": "26th",
            "option4": "16th",
            "answer": 1
        },
    
        {
            "content": "Which UK college has offered to teach its students 'Hinglish', to students for jobs in India?",
            "option1": "Sheffield Hallam University",
            "option2": "Portsmouth College",
            "option3": "Highbury College",
            "option4": "Durham University",
            "answer": 2
        },
    
        {
            "content": "The latest Railway zone of India is Headquartered at ________?",
            "option1": "Jalandhar",
            "option2": "Visakhapatnam",
            "option3": "Guwahati",
            "option4": "Lucknow",
            "answer": 2
        },
    
        {
            "content": "Which day World Teachers Day is celebrated?",
            "option1": "7th October",
            "option2": "3rd October",
            "option3": "4th October",
            "option4": "5th October",
            "answer": 4
        }
    ]
    return (
        <PageToDisplay></PageToDisplay>
    )
}
