import Flashcard from "../Flashcard/Flashcard"

export default function FlashcardsContainer() {

    return (
        < div className="FlashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <div>
                <Flashcard />
                <Flashcard />
                <Flashcard />
            </div>
            <div>
                <Flashcard />
                <Flashcard />
                <Flashcard />
            </div>
        </ div >
    )
}




// section className="FlashcardsContainer" style={{ border: "2px solid black", padding: "10px", margin: "10px" }} 