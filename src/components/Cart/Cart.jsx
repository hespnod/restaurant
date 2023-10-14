import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Contexts/cartContext';

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const handleClose = () => {
        ctx.setClicked(!ctx.clicked);
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
    const handleModalClick = () => {
        ctx.setClicked(!ctx.clicked)
    }

    return (
        (ctx.clicked &&
            <Modal onClick={handleModalClick}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleClose} className={classes['button--alt']}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        )
    );
};

export default Cart;