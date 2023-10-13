import Input from "../../UI/Input";

const MealsForm = props => {
    return (
        <form>
            <Input label='Amount' input={{ id: 'Amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
            <button className='mt-2 p-1 px-8 bg-amber-950 text-white rounded-lg'>+ Add</button>
        </form>
    );
};

export default MealsForm;