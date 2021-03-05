import React, { useState } from 'react'
import AttemptQuestion from '../AttemptQuestion/AttemptQuestion'
import Result from '../Result/Result'
import tapAudio from '../../../assets/sounds/select.wav'
import pikachu from '../../../assets/images/pikachu.jpg'
import blastoise from '../../../assets/images/blastoise.gif'
import bulbasaur from '../../../assets/images/bulbasaur.jpg'
import charlizard from '../../../assets/images/charlizard.jpg'
import mewtwo from '../../../assets/images/mewtwo.jpg'
import squirtle from '../../../assets/images/squirtle.jpg'
import mew from '../../../assets/images/mew.jpg'
import onix from '../../../assets/images/onix.jpg'
import magikarp from '../../../assets/images/magikarp.png'
import snorlax from '../../../assets/images/snorlax.jpg'


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
            "content": pikachu,
            "option1": "pikachu",
            "option2": "gengar",
            "option3": "moltres",
            "option4": "zapdos",
            "answer": 1
        },
    
        {
            "content": magikarp,
            "option1": "blastoise",
            "option2": "charlizard",
            "option3": "gyadrados",
            "option4": "magikarp",
            "answer": 4
        },
    
        {
            "content": blastoise,
            "option1": "venasaur",
            "option2": "mew",
            "option3": "blastoise",
            "option4": "ghastly",
            "answer": 3
        },
    
        {
            "content": bulbasaur,
            "option1": "pidgey",
            "option2": "bulbasaur",
            "option3": "dragonite",
            "option4": "raichu",
            "answer": 2
        },
    
        {
            "content": charlizard,
            "option1": "mewtwo",
            "option2": "onix",
            "option3": "gengar",
            "option4": "charlizard",
            "answer": 4
        },
    
        {
            "content": mewtwo,
            "option1": "mew",
            "option2": "mewtwo",
            "option3": "deoxys",
            "option4": "latios",
            "answer": 2
        },
    
        {
            "content": onix,
            "option1": "latias",
            "option2": "moltres",
            "option3": "onix",
            "option4": "articuno",
            "answer": 3
        },
    
        {
            "content": snorlax,
            "option1": "snorlax",
            "option2": "magmar",
            "option3": "dragonair",
            "option4": "zapdos",
            "answer": 1
        },
    
        {
            "content": squirtle,
            "option1": "squirtle",
            "option2": "blastoise",
            "option3": "bulbasuar",
            "option4": "charmander",
            "answer": 1
        },
    
        {
            "content": mew,
            "option1": "evee",
            "option2": "lapras",
            "option3": "margikarp",
            "option4": "mew",
            "answer": 4
        }
    ]
    return (
        <PageToDisplay></PageToDisplay>
    )
}
