import CurvedScreen from "./Screen";
import Seat from "./Seat";
const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const renderSeats = (seatNumbers) => {
  return (
    <div className="flex flex-row justify-around">
      {seatNumbers.map((seat) => {
        return <Seat seatno={seat} key={seat} />;
      })}
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

const SeatMatrix = () => {
  return (
    <div className="container">
      <p className="text-center my-4 text-2xl font-bold text-white">Screen</p>
      <CurvedScreen />
      <div className="flex flex-col gap-y-5 flex-wrap items-center my-8">
        {renderRows()}
      </div>
    </div>
  );
};

export default SeatMatrix;
