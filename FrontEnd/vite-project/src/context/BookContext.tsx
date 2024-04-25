import React, { createContext, useState, useContext } from "react";

const defaultValue = {
  books: [],
  updateBooks: () => {} // Placeholder function
};

const BookContext = createContext(defaultValue);

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const updateBooks = (newBooks) => {
    setBooks(newBooks);
  };

  return (
    <BookContext.Provider value={{ books, updateBooks }}>
      {children}
    </BookContext.Provider>
  );
};
