

import { InfiniteMovingCardsDemo } from "./Scrollanimation"
import { LayoutGridDemo } from "./Cards"
import { Button } from "@nextui-org/button"
import NavBar from "../NavBar/NavBar"




const Home = () => {
  return (
    <div className='h-auto'>
      <NavBar/>
      <div className='w-full'>
      <InfiniteMovingCardsDemo/>
      
      </div>
   
      <div className='flex justify-center'>
  <LayoutGridDemo/>
      </div>
    </div>
  )
}

export default Home
