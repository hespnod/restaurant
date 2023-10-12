import { useState } from "react";

const MealsForm = props => {
    const [quant, setQuant] = useState(0);
    const handleClick = (e) => {
        e.preventDefault();
        setQuant(e.target[0].value);
        console.log(quant);
        
    }
    return (
        <form onSubmit={handleClick}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" value={quant} />
            </div>
            <div>
                <input type="Submit" />
            </div>
        </form>
    );
};

export default MealsForm;