import { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealsForm = props => {
    const amountRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const handleSubmit = event => {
        event.preventDefault();
        const inputAmount = amountRef.current.value;
        const inputAmountNumber = +inputAmount;
        if (inputAmount.trim().length === 0 || inputAmount < 1 || inputAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(inputAmountNumber);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input ref={amountRef} label='Amount' input={{ id: 'Amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
            <button className='mt-2 p-1 px-8 bg-amber-950 text-white rounded-lg'>+ Add</button>
            {!amountIsValid && <p>Enter amount between 1-5 only</p>}
        </form>
    );
};

export default MealsForm;