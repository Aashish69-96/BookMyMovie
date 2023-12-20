// SeatMatrix.jsx
import CurvedScreen from "./Screen";
import Seat from "./Seat";
import { useSeatContext } from "../../context/SeatContext";
const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const SeatMatrix = () => {
  const { selectedSeats } = useSeatContext();

  const renderSeats = (seatNumbers) => {
    return (
      <div className="flex flex-row justify-around">
        {seatNumbers.map((seat) => (
          <Seat key={seat} seatno={seat} />
        ))}
      </div>
    );
  };

  const renderRows = () => {
    return rows.map((row) => (
      <div key={row} className="w-2/3 relative">
        <div className="absolute top-[50%] translate-y-[-50%] left-[-80px] text-theme-light-dark-3 font-bold">
          {row}
        </div>
        {renderSeats(generateSeatNumbers(row))}
      </div>
    ));
  };

  const generateSeatNumbers = (row) => {
    return Array.from({ length: 10 }, (_, index) => `${row}${index + 1}`);
  };

  return (
    <div className="container">
      <p className="text-center my-4 text-2xl font-bold text-white">Screen</p>
      <CurvedScreen />
      <div className="flex flex-col gap-y-5 flex-wrap items-center my-8">
        {renderRows()}
      </div>
      <div className="text-white">
        Selected Seats: {selectedSeats.join(", ")}
      </div>
    </div>
  );
};

export default SeatMatrix;
