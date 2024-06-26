import { useNavigate } from 'react-router-dom';
import { TypewriterEffect } from '../../../componets/ui/typewriter-effect'
const GetStarted = () => {
  const navigate=useNavigate()
  const words = [
    {
      text: "Explore ",
    },
    {
      text: "the ",
    },
    {
      text: "magic ",
    },
    {
      text: "of ",
    },
    {
      text: "comics.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  const goHome=()=>{
    navigate('/home')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
     Where every page tells a tale
    </p>
    <TypewriterEffect words={words} />
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      <button onClick={goHome} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Join now
      </button>
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
    </div>
  </div>
  )
}

export default GetStarted
