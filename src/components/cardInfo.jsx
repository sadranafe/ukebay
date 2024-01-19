import dummy_cardInfo from "../DummyData/dummy_cardInfo"; 
const CardInfo = () => {
    return (
        <>
            <div className = "flex flex-wrap justify-center items-center my-10">
                {
                    dummy_cardInfo.map((item , index) => {
                        return (
                            <div key = {index} className = "w-3/12 flex flex-wrap justify-center items-center p-2 m-3 rounded-3xl bg-gradient-to-br from-blue-200 to-purple-400/30">
                                <div className = "w-3/12 h-full text-center">
                                    <i className = {`bx bx-${item.icon} text-4xl text-blue-700`}></i>
                                </div>

                                <div className = "w-9/12">
                                    <h3 className = "text-lg uppercase">{item.title}</h3>
                                    <p className = "text-[13px] p-2 pt-1 text-gray-500 text-justify">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default CardInfo;