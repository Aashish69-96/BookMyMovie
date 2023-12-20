import { MdOutlineChair } from "react-icons/md";
import { useSeatContext } from "../../context/SeatContext";
import { useBookedSeatContext } from "../../context/BookedSeatContext";

import { MdChair } from "react-icons/md";

const Seat = ({ seatno }) => {
  const { handleSeatClick, selectedSeats } = useSeatContext();
  const { bookedSeats } = useBookedSeatContext();
  const isSeatSelected = selectedSeats.includes(seatno);
  const isSeatBookedSelected = bookedSeats.includes(seatno);
  console.log(bookedSeats);

  const handleOnClick = () => {
    if (!isSeatBookedSelected) {
      handleSeatClick(seatno);
    }
  };

  const selectedChair = () => {
    if (isSeatBookedSelected || isSeatSelected) {
      return <MdChair />;
    }
  };
  const unSelectedChair = () => {
    if (!isSeatSelected) {
      return <MdOutlineChair />;
    }
  };

  return (
    <div
      className="text-theme-light-dark-3 cursor-pointer text-xl"
      onClick={handleOnClick}
    >
      {selectedChair() ? selectedChair() : unSelectedChair()}
      {/* {unSelectedChair()} */}
    </div>
  );
};

export default Seat;
