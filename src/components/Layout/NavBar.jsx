import { BsCart } from 'react-icons/bs'
import mealsImage from '../../assets/meals.jpg'

const NavBar = () => {
    return (
        <>
            <nav className='bg-amber-800 p-4 flex justify-between'>
                <h2 className='text-white text-2xl font-extrabold'>ReactMeals</h2>
                <div className='flex bg-black bg-opacity-30 p-5 w-[10vw] rounded-lg'>
                    <BsCart />
                    <span className='ml-2'>Your Cart</span>
                    <span className='bg-amber-800 text-white ml-3 p-2'>0</span>
                </div>
            </nav>
            <img className='w-[100%] h-[25rem] z-0 overflow-hidden' src={mealsImage} alt="mealsImage" />
        </>
    )
};
export default NavBar