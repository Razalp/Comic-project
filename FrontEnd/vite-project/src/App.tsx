import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetStarted from './Pages/UserSide/GetStarted/GetStarted'
import Home from './Pages/UserSide/Home/Home'

function App() {
 

  return (
    <Routes>
        <Route path="/" element={<GetStarted />}/>
        <Route path="/home" element={<Home />}/>
    </Routes>
  )
}

export default App
