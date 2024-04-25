import React, { useEffect } from 'react';
import { useBookContext } from '../../../context/BookContext';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

const BookCard = () => {
    const { books, updateBooks } = useBookContext();

    const fetchBooks = () => {
        axios.get("http://localhost:3000/admin/get-books")
            .then(response => {
                updateBooks(response.data);
            })
            .catch(error => {
                console.error("Error fetching books:", error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
     
     <div className="max-w-[900px] gap-10 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
        
        {books.map((book) => (
            <a key={book._id} href={`http://localhost:3000/upload/${book?.pdf}`} target="_blank" rel="noopener noreferrer" className="col-span-12 sm:col-span-4 h-[300px]">
                <Card className="h-full">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="text-white font-medium text-large">{book.title}</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt={book.title}
                        className="z-0 w-full h-full object-cover"
                        src={`http://localhost:3000/upload/${book?.image}`} 
                        isZoomed
                    />
                </Card>
            </a>
        ))}
    </div>

    
    );
};

export default BookCard;
