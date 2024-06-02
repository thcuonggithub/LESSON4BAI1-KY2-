import "./Card.css";
const Card = (props) => {
    const handleStudentClick = () => {
        alert(`${props.name} - ${props.total}`);
    }
    return (
        <>
            <td>{props.id}</td>
            <td onClick={handleStudentClick} className="student_name">{props.name}</td>
            <td>{props.total}</td>
        </>
    )
};
export default Card;