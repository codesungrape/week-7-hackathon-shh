import Flashcard from "../Flashcard/Flashcard"
import questionsAndAnswers from "./questionsAndAnswers";
import { useState } from "react";


// Problem 1: if i hard code the question and answer, it doesnt make sense as i need to type loads ad its just not going to be helpful. I want to make this take a question and answer non-hard-coded values
// try an array of obj as you can have key value pairs with that- makes sense- DONE

// Problem 2: Now I want to make six flashcards and each one to render its own unique question and when toggled, it will show its associated answer. 
// create 6 react question and asnwers - DONE

// Obj1 = questionsAndAnswers[0]  -> questionsAndAnswers[0].question or questionsAndAnswers[0].answers
// array so need to use INDEX - can create a link with the array index and container


export default function FlashcardsContainer() {

    //const [ qOrA, setQorA ]= useState(questionsAndAnswers[0].question);

     // Create an array of states, one for each question that renders its own question
     // just like how before, the inital state was the question, the nitial state of all cards will be question
     const [cardStates, setCardStates] = useState(
        questionsAndAnswers.map(qa => qa.question)
    );

    // when clicked it should change to the next state
    function handleClick(index) {
        // Toggle state between 'question' and 'answer'
        // callback function that 
        setCardStates(prevStates => {
            // Creates a copy of the previous states
            const newStates = [...prevStates];
            
            // Toggle the state for the specific card
            newStates[index] = newStates[index] === questionsAndAnswers[index].question 
                ? questionsAndAnswers[index].answer 
                : questionsAndAnswers[index].question;
            
            return newStates;
        });
    }

    return (
        < div className ="FlashcardsContainer" style ={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div>
                { questionsAndAnswers.map((qa, index) => {
                    return (
                        <Flashcard 
                            key={index}
                            value={cardStates[index]}
                            handleClick={() => handleClick(index)}
                        />
                    )
                })}
            
            </div>
        </ div >
    )
}
