import { Link, NavLink } from 'react-router-dom';
import UseCart from '../../hooks/useCart';

const Header = () => {
    const [{ DUMMYDATA_CART , totalQuantity } , dispatch] = UseCart()

    return (
        <>
            <header className = 'w-full flex flex-wrap justify-between items-center p-5 px-16 select-none'>
                <div className = 'w-1/12 p-2 relative'>
                    <Link to = '/' className = 'uppercase text-2xl p-2 absolute -top-8'>
                        <img src = "/ukeBay_logo.png" alt = "mohammad sadra nafe" />
                    </Link>
                </div>

                <div className = 'w-8/12 bg-re d-400 flex flex-wrap justify-center items-center capitalize text-sm'>
                    <div className = 'mx-3'>
                        <NavLink to = '/' className = { ({ isActive }) => isActive ? 'after:absolute after:left-1.5 after:top-4 after:w-1.5 after:h-1.5 after:bg-sky-600 after:rounded-full after:-translate-x-1/2 relative text-blue-500 transition-all p-3 px-4' : 'after:absolute after:left-1.5 after:top-4 after:w-1.5 after:h-1.5 after:bg-transparent after:-translate-x-1/2 after:rounded-full relative hover:text-blue-400 transition-all p-3 px-4'}>home</NavLink>
                    </div>

                    <div className = 'mx-3'>
                        <NavLink to = '/products' className = { ({ isActive }) => isActive ? 'after:absolute after:left-1.5 after:top-4 after:w-1.5 after:h-1.5 after:bg-sky-600 after:rounded-full after:-translate-x-1/2 relative text-blue-500 transition-all p-3 px-4' : 'after:absolute after:left-1.5 after:top-4 after:w-1.5 after:h-1.5 after:bg-transparent after:-translate-x-1/2 after:rounded-full relative hover:text-blue-400 transition-all p-3 px-4'}>products</NavLink>
                    </div>

                    <div className = 'mx-3'>
                        <NavLink to = '/contact-us' className = { ({ isActive }) => isActive ? 'after:absolute after:left-1.5 after:top-4 after:w-1.5 after:h-1.5 after:bg-sky-600 after:rounded-full after:-translate-x-1/2 relative text-blue-500 transition-all p-3 px-4' : 'after:absolute after:left-1.5 after:top-4 after:w-1.5 after:h-1.5 after:bg-transparent after:-translate-x-1/2 after:rounded-full relative hover:text-blue-400 transition-all p-3 px-4'}>contact us</NavLink>
                    </div>

                </div>
                
                <div className = 'w-2/12 flex flex-wrap justify-end items-center'>
                    <Link to = '/cart' className = 'relative p-1 px-2 mr-6'>
                        <i className = 'bx bx-shopping-bag text-2xl'></i>
                        <p className = 'absolute w-6 h-6 flex flex-wrap justify-center items-center -top-1 -right-4 text-xs border border-black rounded-full'>{totalQuantity}</p>
                    </Link>

                    <Link to = '/login' className = 'border border-blue-600 p-1 px-3 rounded-lg capitalize hover:bg-blue-600 hover:text-white transition-all'>login</Link>
                </div>
            </header>
        </>
    );
};

export default Header;