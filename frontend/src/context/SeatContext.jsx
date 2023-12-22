import React, { createContext, useContext, useState } from "react";

const SeatContext = createContext();

export const useSeatContext = () => {
  const context = useContext(SeatContext);
  if (!context) {
    throw new Error("useSeatContext must be used within a SeatContextProvider");
  }
  return context;
};

export const SeatContextProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat
        );
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  const contextValue = {
    selectedSeats,
    setSelectedSeats,
    handleSeatClick,
  };

  return (
    <SeatContext.Provider value={contextValue}>{children}</SeatContext.Provider>
  );
};
