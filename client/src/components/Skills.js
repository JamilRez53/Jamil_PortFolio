import React, {useState,useEffect} from 'react'
import Html from '../assets/html.png';
import JavaScript from '../assets/java-script.png';
import Mongo from '../assets/mongoDb.png';
import Reat from '../assets/react.png';
import MySql from '../assets/mysql.png';
import Nodejs from '../assets/nodejs.png';
const Skills = () => {
  const skills = [
    {
      image: Html,
      text:"HTML"
    },
    {
      image: JavaScript,
      text:"JAVASCRIPT"
    },
    {
      image: Reat,
      text:"REACT"
    },
    {
      image: Mongo,
      text:"MONGODB"
    },
    {
      image: MySql,
      text:"MYSQL"
    },
    {
      image: Nodejs,
      text:"NODE.JS"
    },

  ]
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollX);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Adjust the slider animation based on the scroll position
  const sliderStyle = {
    transform: `translateY(${scrollPosition / 2}px)`, // Adjust the multiplier for the desired effect
    transition: 'transform 0.3s ease-in-out', // Add a smooth transition
  };
  return (
    <div id='skills' style={sliderStyle}>
      <p className="text-white text-center mt-[100px] text-4xl font-Kanit">Skills Upon Speicific Tech-Stack</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-around mt-[50px]">
        
       {skills.map((items)=>{
        return(
          <div className='m-auto flex flex-col items-center'>
          <img 
          className='w-[50px] h-[50px]'
          src={items.image}/>
          <p className="text-white font-Kanit text-2xl">
            {items.text}
          </p>
          </div>
          
        )
       })}
      </div>
    </div>
  )
}

export default Skills