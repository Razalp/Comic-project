import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetStarted from './Pages/UserSide/GetStarted/GetStarted'
import Home from './Pages/UserSide/Home/Home'
import AdminGetStart from './Pages/AdminSide/AdminGetStart/AdminGetStart'
import AddBook from './Pages/AdminSide/AddBook/AddBook'

function App() {
 

  return (
    <Routes>
        <Route path="/" element={<GetStarted />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/admin" element={<AdminGetStart />}/>
        <Route path="/addBook" element={<AddBook />}/>
    </Routes>
  )
}

export default App
