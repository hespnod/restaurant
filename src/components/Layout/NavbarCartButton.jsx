import { useContext } from 'react';
import { BsCart } from 'react-icons/bs'
import storeContext from '../../Contexts/storeContext';
import CartContext from '../../Contexts/cartContext';

const NavbarCartButton = (props) => {
    const ctx = useContext(storeContext);
    const ctx1 = useContext(CartContext);
    const handleCartClick = () => {
        ctx1.setClicked(!ctx.clicked);
    }
    const numberOfItems = ctx.items.reduce((cur, item) => {
        return cur + item.amount;
    }, 0)

    return (
        <div onClick={handleCartClick} className='flex justify-center bg-black bg-opacity-30 p-5  rounded-lg cursor-pointer'>
            <BsCart className='text-white mt-1' />
            <span className='ml-2 text-white'>Your Cart</span>
            <span className='bg-amber-800 text-white ml-3 px-2 rounded-md'>{numberOfItems}</span>
        </div>
    );
};

export default NavbarCartButton;