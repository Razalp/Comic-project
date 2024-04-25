

import { InfiniteMovingCardsDemo } from "./Scrollanimation"
import { LayoutGridDemo } from "./Cards"
import { Button } from "@nextui-org/button"
import NavBar from "../NavBar/NavBar"
import Books from "./Books"




const Home = () => {
  return (
    <div className='h-auto'>
      <NavBar/>
      <div className='w-full'>
       
      <InfiniteMovingCardsDemo/>
      
      </div>
   
      <div className=''>
        
  <LayoutGridDemo/>
      </div>
      <div>
        <Books></Books>
      </div>
    </div>
  )
}

export default Home
