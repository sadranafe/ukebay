import { Link } from "react-router-dom";
import Dummy_Customers from "../DummyData/dummy_customers";


const Customers = () => {
    return (
        <>
            <div className = "p-2 my-5">
                <div className = "flex flex-wrap justify-center items-center select-none">
                    {
                        Dummy_Customers.map((item , index) => 
                            <div key = {index} className = "bg-blu e-200 p-2 mx-10 text-center">
                                <i className = {`${item.name} text-6xl text-cyan-900`}></i>
                                <h3>{item.title}</h3>
                            </div>
                        )
                    }

                </div>

                <div className = "flex flex-wrap mt-4 justify-center items-center">
                    <Link to = '/customers' className = "flex flex-wrap mx-auto justify-normal items-center">
                        meet our customers
                        <i className = "bx bx-right-arrow-alt pl-1 text-lg"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Customers;