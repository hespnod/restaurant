import { useState } from "react";
import Input from "../../UI/Input";

const MealsForm = props => {
    // const [quant, setQuant] = useState(0);
    // const handleClick = () => {
    //     if (quant >= 5) {
    //         alert('Max allowed quantity is 5');
    //     } else {
    //         setQuant((prev) => prev + 1);
    //     }
    //     console.log(quant);
    // }
    return (
        <form>
            <Input label='Amount' input={{ id: 'Amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
            <button className='mt-2 p-1 px-8 bg-amber-950 text-white rounded-lg'>+ Add</button>
        </form>
    );
};

export default MealsForm;