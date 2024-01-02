import React from 'react'

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
    <div className='w-full h-screen bg-[#000119]'>
        <div className='w-full mt-[250px] px-[50px]'>
        {texts.map((items,index)=>{
        return(
            <div className='w-5/6 justify-around'>
                {(index=== 2||index===3)?<p className="text-[#cccccc] text-2xl sm:text-5xl font-Kanit">{items.text}</p>:<p className='text-white font-Kanit text-4xl sm:text-7xl'>{items.text}</p>}
            </div>
        )
     })}
        </div>
       
       
    
    </div>
  )
}

export default Home