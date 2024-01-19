import { Link } from 'react-router-dom';
import CardInfo from '../components/cardInfo';
import TrendingProducts from '../components/TrendingProducts';
import Feedback from '../components/Feedback';
import Customers from '../components/Customers';

const Home = () => {
    return (
        <>
            <div className = "flex flex-wrap justify-between items-center py-5 pr-5">

                <div className = "w-1/2 flex flex-wrap items-center justify-center p-5 translate-y-6">
                    <h1 className = "-translate-x-5 font-semibold text-5xl">BUY YOUR <br /> BEST PRODUCTS <br /> AT <span className="text-blue-400">HOME</span></h1>

                    <div className = "w-8/12 text-sm my-5 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a iste nobis et sed totam nesciunt, quos culpa corrupti inventore quam beatae tenetur dicta fugiat.</p>
                    </div>

                    <div className = "w-full text-center mt-5">
                        <Link to = '/products' className = "bg-blue-600 text-white border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black transition-all p-2.5 px-3 rounded-xl">order now</Link>
                    </div>
                </div>

                <img src = "./shoppingvector.png" alt = "mohammad sadra nafe" className = "w-1/2 h-80" />
            </div>
                
            <CardInfo/>

            <TrendingProducts/>

            <Feedback/>

            <Customers/>
        </>
    );
};

export default Home;