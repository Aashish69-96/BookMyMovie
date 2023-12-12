import { MdOutlineChair } from "react-icons/md";
import { MdChair } from "react-icons/md";
const Seat = ({ seatno }) => {
  return (
    <div className=" text-theme-light-dark-3 cursor-pointer text-xl">
      <MdOutlineChair></MdOutlineChair>
    </div>
  );
};
export default Seat;
