import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import PortFolio from '../assets/IMG_7719.jpg';
const Home = () => {
    const texts = [
        {
            text:"Hello I am,"
        },
        {
            text:"Jamil Reza"
        },
        {
            text:"A Front-end Developer"
        },
        {
            text:"I am a Junior Web Developer who is currently working on front-end aiming to be a Full-Stack developer in the future"
        }
    ]
  return (
    <div className='w-full h-screen flex flex-col-reverse md:flex-row  bg-[#000119]'>
        <div className='mt-[250px] px-[20px] sm:mt-[200px]px-[50px]'>

        {texts.map((items,index)=>{
        return(
            <div className='justify-between'>
                <p className={(index===2||index===3)?"text-[#cccccc] w-7/8 sm:w-5/6 text-2xl sm:text-5xl font-Kanit":'text-white font-Kanit text-4xl sm:text-7xl'}>{items.text}</p>
            </div>
        )
     })}
        
     <div className="mt-4">
     <button className='flex group font-Kanit border-2 px-6 py-2 my-2 items-center shadow-white hover:shadow-blue-800 shadow-lg bg-white hover:bg-blue-800 hover:border-blue-800 hover:text-white'>
     View Projects
        <span className="group-hover:rotate-90 duration-300">
         <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
     </div>
       
        </div>
        <img
        src={PortFolio}
        className="m-4 sm:mt-[250px] ml-[10px] sm:w-[350px] h-[350px] sm:ml-auto sm:mr-[150px] order-first sm:order-last"
        alt="Portfolio"
      />
    
    </div>
  )
}

export default Home