import DummyFeedback from "../DummyData/dummy_feedback";

import { Pagination } from 'swiper/modules';
import { Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const Feedback = () => {
    return (
        <>
            <div className = 'mb-10 -mt-3'>
                <div className = 'text-center mb-5'>
                    <h1 className = 'text-2xl capitalize'>customer feedback</h1>
                </div>

                <div className = "flex flex-wrap justify-center items-center select-none">
                    <Swiper slidesPerView = {2} className = "p-5" spaceBetween = {20} grabCursor = {true}  modules = {[Pagination]} pagination = {{ dynamicBullets : true , clickable: true }}>
                        {
                            DummyFeedback.map((item , index) =>
                                <SwiperSlide key = {index}>
                                    <div className = "h-60 flex flex-wrap justify-center items-center p-3 px-5 mx-2 mb-5 rounded-xl shadow-lg shadow-gray-200">
                                        <div className = " w-full flex flex-wrap justify-normal items-center">
                                            <div className = 'w-2/12 '>
                                                <img src = {item.img} alt = "mohammad sadra nafe" />
                                            </div>

                                            <div className = 'w-1/2'>
                                                <div>
                                                    <h2 className = "text-xl capitalize">{item.name}</h2>
                                                </div>

                                                <div>
                                                    <p className = "text-sm text-gray-500">{item.position}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className = 'text-justify text-[15px]'>{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Feedback;