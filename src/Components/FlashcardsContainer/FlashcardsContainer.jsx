import Flashcard from "../Flashcard/Flashcard"
import { useState } from "react";



export default function FlashcardsContainer() {

// const [cardFace, setCardFace]= useState({text.prop.question})

// function handleClick(){
// setCardFace ({text.prop.answer})
// }

    return (
        < div className="FlashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div>
                <Flashcard value = "Q1"/>
                <Flashcard value = "Q2"/>
                <Flashcard value = "Q3"/>
            </div>
            <div>
                <Flashcard value = "Q4"/>
                <Flashcard value = "Q5"/>
                <Flashcard value = "Q6"/>
            </div>
        </ div >
    )
}




// section className="FlashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }} 