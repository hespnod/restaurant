import NavbarCartButton from './NavbarCartButton';
import mealsImage from '../../assets/meals.jpg'

const NavBar = () => {
    return (
        <>
            <nav className='bg-amber-800 p-4 flex justify-between'>
                <h2 className='text-white text-2xl font-extrabold'>ReactMeals</h2>
                <NavbarCartButton />
            </nav>
            <img className='w-[100%] h-[25rem] z-0 overflow-hidden' src={mealsImage} alt="mealsImage" />
        </>
    )
};
export default NavBar