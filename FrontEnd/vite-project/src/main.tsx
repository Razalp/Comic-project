import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import { BookProvider } from './context/BookContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
  <BrowserRouter>
  <React.StrictMode>
  <BookProvider>
    <App />
    </BookProvider>

  </React.StrictMode>
  </BrowserRouter>
  </NextUIProvider>

  ,
)
