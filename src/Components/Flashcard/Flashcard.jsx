
export default function Flashcard({ value, handleClick }) {

    return (
        <section onClick ={handleClick} style ={{ border: "2px solid black", padding: "10px", margin: "10px" }} >
            {value}
    </section>
    )
}