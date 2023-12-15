

function Choices(props) {
    return (
        <button onClick={props.checkAnswer}>{props.country}</button>
    );
}

export default Choices;