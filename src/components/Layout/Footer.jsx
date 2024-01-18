import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className = 'bg-neutral-200/40 px-2 p-1 flex flex-wrap justify-center items-center select-none'>
                
                <div className = 'w-1/2 flex flex-wrap justify-between items-center p-2 relative'>
                    <div className = 'w-2/12'>
                        <div className = 'w-10/12 mx-auto'>
                            <Link to = '/'>
                                <img src = "/ukeBay_logo.png" alt = "mohammad sadra nafe" className = 'w-full h-full'/>
                            </Link>
                        </div>
                    </div>


                    <div className = 'w-10/12 flex flex-wrap items-center justify-center'>
                        <div className = 'mx-2 text-sm'>
                            <Link to = '/' className = 'capitalize p-4'>
                                <i className = 'bx bx-chevron-right'></i>
                                home
                            </Link>
                        </div>

                        <div className = 'mx-2 text-sm'>
                            <Link to = '/products' className = 'capitalize p-4'>
                                <i className = 'bx bx-chevron-right'></i>
                                products
                            </Link>
                        </div>
                        
                        <div className = 'mx-2 text-sm'>
                            <Link to = '/contact-us' className = 'capitalize p-4'>
                                <i className = 'bx bx-chevron-right'></i>
                                contact us
                            </Link>
                        </div>
                    </div>
                </div>


                <div className = 'relative flex flex-wrap justify-between items-center w-1/2'>
                    <div className = 'text-gray-500 w-5/12'>
                        <p className = 'text-xs'>© made by ❤️ by Mohammad Sadra Nafe</p>
                    </div>

                    <div className = 'w-6/12 flex flex-wrap justify-center items-center'>
                        <div className = 'mx-3 transition-all group'>
                            <a href = "https://github.com/sadranafe" className = 'p-2 group-hover:text-blue-600 transition-all'>
                                <i className = 'bx bxl-github text-xl'></i>
                            </a>
                        </div>

                        <div className = 'mx-3 transition-all group'>
                            <a href = "#" className = 'p-2 group-hover:text-blue-600 transition-all'>
                                <i className = 'bx bxl-telegram text-xl'></i>
                            </a>
                        </div>
                        
                        <div className = 'mx-3 transition-all group'>
                            <a href = "https://www.instagram.com/_sadra.nafe_/" className = 'p-2 group-hover:text-blue-600 transition-all'>
                                <i className = 'bx bxl-instagram text-xl'></i>
                            </a>
                        </div>
                        
                        <div className = 'mx-3 transition-all group'>
                            <a href = "mailto:sadranafe7@gmail.com" className = 'p-2 group-hover:text-blue-600 transition-all'>
                                <i className = 'bx bx-envelope text-xl'></i>
                            </a>
                        </div>

                        <div className = 'mx-3 transition-all group'>
                            <a href = "https://www.linkedin.com/in/sadranafe" className = 'p-2 group-hover:text-blue-600 transition-all'>
                                <i className = 'bx bxl-linkedin text-xl'></i>
                            </a>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    );
};

export default Footer;