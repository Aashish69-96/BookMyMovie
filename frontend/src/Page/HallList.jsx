import { useState, useEffect } from "react"
import Tilt from "react-parallax-tilt";
const HallList = () => {
    const [hallList, setHallList] = useState();
    useEffect(() => {
        const fetchHallList = async () => {
            try {
                const responseData = await fetch("http://localhost:3000/api/moviehall/getallhalls");
                if (!responseData) {
                    throw Error("Error : Bad Server Gateway");
                }
                const responseJson = await responseData.json();
                console.log(responseJson.data);
                setHallList(responseJson.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchHallList();

    }, []);

    const MovieList = () => {
        return ({})
    }

    return (

        <div>
            <section className="flex flex-col mb-10">
                <p className=" text-theme-light-white font-bold text-xl mb-2">
                    Movie Halls List
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">



                    {hallList ? hallList.map((halldetail) => (
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.9}
                            glareColor="lightblue"
                            glarePosition="all"
                        >
                            <div className="cursor-pointer movieCard bg-theme-dark border-2 border-theme-light-dark-2 shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row">
                                <div className="p-4">
                                    <p className="text-theme-light-white font-semibold text-lg">
                                        {halldetail.name}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2">
                                        {halldetail.location}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2">
                                        {halldetail.email}
                                    </p>
                                </div>
                            </div>
                        </Tilt>
                    )) : "Loading"}
                </div>
            </section>
        </div>
    );
}

export default HallList;