import { useParams } from "react-router-dom";
import SeatMatrix from "../components/Seat/SeatMatrix";
import Slide from "../components/movieSlider/Slide";
import { useEffect, useState } from "react";
import { useSeatContext } from "../context/SeatContext";
import { useBookedSeatContext } from "../context/BookedSeatContext";
import TokenParser from "../Utility/TokenParse";
const MovieIndex = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { setSelectedSeats, selectedSeats } = useSeatContext();
  const { bookedSeats, setBookedSeats } = useBookedSeatContext();

  const { getToken } = TokenParser();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/moviebooking/getmovie/${id}`
        );
        if (!response.ok) {
          throw new Error("Error fetching movie details");
        }
        const data = await response.json();

        // console.log(data);
        const arrayOfSeats = data.seats.map((obj) => obj.seat);
        setBookedSeats(arrayOfSeats);
        // setSelectedSeats(arrayOfSeats);
        setMovieDetail(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovieDetail();
  }, [id]);

  const handlePurchaseTicket = async () => {
    try {
      if (selectedSeats.length === 0) {
        console.log(
          "No seats selected. Please choose seats before purchasing."
        );
        return;
      }
      const response = await fetch(
        `http://localhost:3000/api/moviebooking/purchase/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedSeats }),
        }
      );
      if (!response.ok) {
        throw new Error("Error purchasing tickets");
      }

      const responseData = await response.json();
      console.log("Purchase successful:", responseData);
    } catch (err) {
      console.log(err);
    }
  };

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Slide details={movieDetail}></Slide>
      <div className="p-2 flex flex-col md:flex-row mt-5">
        <div className="md:w-1/4 w-full p-4 ">
          <h2 className="text-lg font-semibold mb-4 text-theme-light-white">
            Available Date and Time
          </h2>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm text-theme-white">
                Date:
              </label>
              <select
                id="date"
                name="date"
                className="w-full bg-theme-light-dark-2  p-2 border-none text-theme-white rounded  focus:border-blue-500"
              >
                <option value="1">1 December</option>
                <option value="2">2 December</option>
                <option value="3">3 December</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm text-theme-white">
                Time:
              </label>
              <select
                id="time"
                name="time"
                className="w-full bg-theme-light-dark-2  p-2 border-none text-theme-white rounded  focus:border-blue-500"
              >
                <option value="time-1">8:00 AM</option>
                <option value="time-2">12:00 PM</option>
                <option value="time-3">4:00 PM</option>
              </select>
            </div>
          </div>

          <div className="text-theme-light-white my-5 bg-theme-light-dark-2 px-4 py-2 rounded-md">
            <p className="mb-4 text-lg font-bold">Your Selected Seats</p>
            <p className="text-sm text-theme-light-dark-3 font-bold">
              {selectedSeats.length} seats
            </p>
            <div className="flex flex-row flex-wrap text-sm gap-2">
              {selectedSeats.map((item) => {
                return (
                  <p
                    className="px-4 py-1 bg-blue-600 rounded-md cursor-pointer"
                    key={item}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col w-full overflow-hidden mt-5  text-theme-light-white">
              {/* Table Rows */}
              <div className="flex flex-row border-b border-theme-light-dark-3 p-2">
                <div className="flex-1">Normal</div>
                <div className="flex-1">{selectedSeats.length}</div>
                <div className="flex-1">Rs. {selectedSeats.length * 100}</div>
              </div>

              {/* Total Row */}
              <div className="flex flex-row p-2 font-bold">
                <div className="flex-1">Total</div>
                <div className="flex-1"></div>
                <div className="flex-1">Rs. {selectedSeats.length * 100}</div>
              </div>
            </div>
          </div>

          <button
            className="bg-blue-600 text-white p-2 rounded w-full"
            onClick={handlePurchaseTicket}
          >
            Purchase Ticket
          </button>
        </div>

        <div className="md:w-3/4 w-full p-4">
          <SeatMatrix></SeatMatrix>
        </div>
      </div>
    </div>
  );
};
export default MovieIndex;
