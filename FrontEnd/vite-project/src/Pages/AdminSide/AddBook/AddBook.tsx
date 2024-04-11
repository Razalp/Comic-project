import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/button";
import { PinContainer } from "../../../componets/ui/3d-pin";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const AddBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:3000/admin/get-books")
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
    
  }, []);

  return (
    <>
      <AdminNavBar />
      <div className="flex h-auto flex-wrap justify-center">
        {books.map((book) => (
          <PinContainer
            key={book._id}
            title={book.name}
          >
            <div className="flex flex-col items-center">
              <img
               src={`http://localhost:3000/${book?.image}`}

                alt={book.name}
                className="w-40 h-40 object-cover rounded-full"
              />
              <h3 className="mt-4 text-lg font-bold">{book.name}</h3>
              <Button
                onClick={() => window.open(`http://localhost:3000/${book._id}/pdf`, "_blank")}
                className="mt-4"
                color="success"
              >
                Open PDF
              </Button>
            </div>
          </PinContainer>
        ))}
      </div>
    </>
  );
};

export default AddBook;
