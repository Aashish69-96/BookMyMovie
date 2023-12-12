import { MdOutlineChair } from "react-icons/md";
import { useSeatContext } from "../../context/SeatContext";
import { MdChair } from "react-icons/md";

const Seat = ({ seatno }) => {
  const { handleSeatClick, selectedSeats } = useSeatContext();
  const handleOnClick = () => {
    handleSeatClick(seatno);
  };
  const isSeatSelected = selectedSeats.includes(seatno);

  return (
    <div
      className="text-theme-light-dark-3 cursor-pointer text-xl"
      onClick={handleOnClick}
    >
      {!isSeatSelected ? <MdOutlineChair /> : <MdChair />}
    </div>
  );
};

export default Seat;
