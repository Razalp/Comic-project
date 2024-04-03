import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetStarted from './Pages/UserSide/GetStarted/GetStarted'

function App() {
 

  return (
    <Routes>
        <Route path="/" element={<GetStarted />}/>
    </Routes>
  )
}

export default App
