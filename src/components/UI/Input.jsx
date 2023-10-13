const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className='ml-2 border border-black-[2] p-1' {...props.input} />
        </div>
    )
};
export default Input;