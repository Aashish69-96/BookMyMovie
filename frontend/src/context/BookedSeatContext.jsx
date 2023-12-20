import React, { createContext, useContext, useState } from "react";

const BookedSeatContext = createContext();

export const useBookedSeatContext = () => {
  const context = useContext(BookedSeatContext);
  if (!context) {
    throw new Error(
      "useBookedSeatContext must be used within a BookedSeatContexProvider"
    );
  }
  return context;
};

export const BookedSeatContexProvider = ({ children }) => {
  const [bookedSeats, setBookedSeats] = useState([]);

  const contextValue = {
    bookedSeats,
    setBookedSeats,
  };

  return (
    <BookedSeatContext.Provider value={contextValue}>
      {children}
    </BookedSeatContext.Provider>
  );
};
