const Button = (props) => {
return (
    <button onClick={props.handelClick}>
        {props.text}
    </button>
)
}

export default Button