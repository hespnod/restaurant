import { useContext } from 'react';
import { BsCart } from 'react-icons/bs'
import CartContext from '../../Contexts/cartContext';

const NavbarCartButton = (props) => {
    const ctx = useContext(CartContext);
    const handleCartClick = () => {
        ctx.setClicked(!ctx.clicked);
    }

    return (
        <div onClick={handleCartClick} className='flex justify-center bg-black bg-opacity-30 p-5 w-[10vw] rounded-lg cursor-pointer'>
            <BsCart className='text-white mt-1' />
            <span className='ml-2 text-white'>Your Cart</span>
            <span className='bg-amber-800 text-white ml-3 px-2 rounded-md'>0</span>
        </div>
    );
};

export default NavbarCartButton;