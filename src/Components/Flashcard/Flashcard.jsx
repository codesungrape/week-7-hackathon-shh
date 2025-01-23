
export default function Flashcard({ value, handleClick, index }) {

    return (
        <section 
        role="region"
        key={index}
        onClick ={handleClick} 
        style ={{ border: "2px solid black", padding: "10px", margin: "10px" }} >
            {value}
    </section>
    )
}