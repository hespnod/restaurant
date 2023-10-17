import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Contexts/cartContext';
import storeContext from '../../Contexts/storeContext';

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const storCtx = useContext(storeContext);
    const removeHandler = (id) => {
        storCtx.removeItem(id)
    }
    const handleClose = () => {
        ctx.setClicked(!ctx.clicked);
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {storCtx.items.map((item) => (
                <div className='flex flex-col' >
                    <li className='text-2xl font-bold' >{item.name}</li>
                    <div className='flex justify-between border-b-2'>
                        <span className=' text-red-600 font-bold '>${item.price}</span>
                        <span className='border rounded p-1 mb-2' >X {item.amount} </span>
                        <div className='mr-5'>
                            <button className='border rounded px-3 text-xl mr-2 mb-2 border-red-700 text-red-700' onClick={() => removeHandler(item.id)} >-</button>
                            <button className='border rounded px-3 text-xl ml-2 mb-2 bg-red-700 text-white'>+</button>
                        </div>
                    </div>
                </div>
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
                    <span>{storCtx.totalAmount}</span>
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