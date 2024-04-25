import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import axios from 'axios';

const AddModal = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [pdf, setPdf] = useState(null);
    const [image, setImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [uploadedPdfUrl, setUploadedPdfUrl] = useState('');

    const handleAddBook = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('title', title);
            formData.append('pdf', pdf);
            formData.append('image', image);

            const response = await axios.post('http://localhost:3000/admin/books', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { pdfUrl } = response.data; 
            setUploadedPdfUrl(pdfUrl);

            setIsOpen(false);
        } catch (error) {
            setError('Error adding book');
            console.error(error);
        }
    };
    useEffect(()=>{

    },[handleAddBook])

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Add book</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Add book</ModalHeader>
                    <ModalBody>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Book name"
                            className="max-w-xs"
                        />
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label="Title"
                            className="max-w-xs"
                        />
                        <Input
                            type="file"
                            onChange={(e) => setPdf(e.target.files[0])}
                            label="PDF"
                            className="max-w-xs"
                        />
                        <Input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            label="Image"
                            className="max-w-xs"
                        />
                        {error && <p className="text-red-500">{error}</p>}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                        <Button color="primary" onClick={handleAddBook}>
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {uploadedPdfUrl && <a href={uploadedPdfUrl} target="_blank" rel="noopener noreferrer">Open PDF</a>}
        </>
    );
};

export default AddModal;
