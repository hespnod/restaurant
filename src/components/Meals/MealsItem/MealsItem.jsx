import { useContext } from 'react';
import MealsForm from './MealsForm';
import classes from './MealsItem.module.css';
import storeContext from '../../../Contexts/storeContext';

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(storeContext);
    const AddToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }
    return (
        <li key={props.key} className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsForm onAddToCart={AddToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;