

import { InfiniteMovingCardsDemo } from "./Scrollanimation"
import { LayoutGridDemo } from "./Cards"



const Home = () => {
  return (
    <div className='h-auto'>
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
