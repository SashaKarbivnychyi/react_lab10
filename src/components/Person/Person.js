export default function Person(props) {
    return (
        <div>
            <img src={props.image}></img>
            <h3>{props.name} {props.surname}, {props.age} years old</h3>
        </div>
    )
} 