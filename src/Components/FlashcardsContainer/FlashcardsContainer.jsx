import Flashcard from "../Flashcard/Flashcard"
import { useState } from "react";


// Problem: if i hard code the question and answer, it doesnt make sense. 
// I want to make this take a question and answer non-hard-coded values
// try an array of obj as you cna have key value pairs with that- makes sense

const questionsAndAnswers = [
    { 
    question: 'Why do you capitalise the function names in React?', 
    answer: "In React, function names are capitalized because React uses the capitalization to distinguish between regular HTML elements (e.g., <div>, <p>) and React components. React components must start with a capital letter so that JSX can correctly interpret them as user-defined components, rather than native HTML tags." },
    
]
// array so need to use INDEX
// Obj inside, so need to use DOT/Square notation
console.log("test: ", questionsAndAnswers[0].question)



export default function FlashcardsContainer() {

    const [ qOrA, setQorA ]= useState(questionsAndAnswers[0].question)

    // when clicked it should change to the next state
    function handleClick() {
        // Toggle state between 'question' and 'answer'
        // callback function that 
        setQorA((prev) => (
            prev === questionsAndAnswers[0].question ? questionsAndAnswers[0].answer : 
            questionsAndAnswers[0].question
            ));
    }

    return (
        < div className ="FlashcardsContainer" style ={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div>
                <Flashcard value={qOrA} handleClick={handleClick}/>
                <Flashcard value={qOrA} handleClick={handleClick}/>
                <Flashcard value={qOrA} handleClick={handleClick}/>
            </div>
            <div>
                <Flashcard value={qOrA} handleClick={handleClick}/>
                <Flashcard value={qOrA} handleClick={handleClick}/>
                <Flashcard value={qOrA} handleClick={handleClick}/>
            </div>
        </ div >
    )
}
