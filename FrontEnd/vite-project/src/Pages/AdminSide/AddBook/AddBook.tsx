import React, { useEffect } from "react";

import axios from "axios";
import { PinContainer } from "../../../componets/ui/3d-pin";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

import BookCard from "./BookCard";
import { TypewriterEffect } from "../../../componets/ui/typewriter-effect";

const AddBook = () => {


  return (
<>
<AdminNavBar/>
<br />

<br />
<BookCard/>
</>
  );
};

export default AddBook;