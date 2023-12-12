import SeatMatrix from "../components/Seat/SeatMatrix";
import Slide from "../components/movieSlider/Slide";
const MovieIndex = () => {
  return (
    <div className="container">
      <Slide></Slide>
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
            <p className="text-sm text-theme-light-dark-3 font-bold">3 seats</p>
            <div className="flex flex-row text-sm gap-2">
              <p className="px-4 py-1 bg-blue-600 rounded-md cursor-pointer">
                A1
              </p>
              <p className="px-4 py-1 bg-blue-600 rounded-md cursor-pointer">
                B5
              </p>
              <p className="px-4 py-1 bg-blue-600 rounded-md cursor-pointer">
                B7
              </p>
            </div>
            <div className="flex flex-col w-full overflow-hidden mt-5  text-theme-light-white">
              {/* Table Rows */}
              <div className="flex flex-row border-b border-theme-light-dark-3 p-2">
                <div className="flex-1">Normal</div>
                <div className="flex-1">3</div>
                <div className="flex-1">Rs. 200</div>
              </div>

              {/* Total Row */}
              <div className="flex flex-row p-2 font-bold">
                <div className="flex-1">Total</div>
                <div className="flex-1"></div>
                <div className="flex-1">Rs. 1200</div>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 text-white p-2 rounded w-full">
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
