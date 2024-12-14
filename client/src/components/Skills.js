import React, {useState,useEffect} from 'react'
import Html from '../assets/html.png';
import JavaScript from '../assets/java-script.png';
import Mongo from '../assets/mongoDb.png';
import Reat from '../assets/react.png';
import MySql from '../assets/mysql.png';
import Nodejs from '../assets/nodejs.png';
import ReactNative from '../assets/React-native.png';
import Prisma from "../assets/prisma.png";
import { motion } from 'framer-motion';
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
    {
      image:ReactNative,
      text:"React Native"
    },
    {
      image: Prisma,
      text:"Prisma"
    }
  ]
  return (
    <div id='skills'>
      <p className="text-white text-center mt-[100px] text-4xl font-Kanit">Expertise</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-around mt-[50px]">
        
       {skills.map((items)=>{
        return(
          <motion.div className='flex flex-col py-2 justify-center items-center gap-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          >
          <img 
          className='w-[50px] h-[50px]'
          src={items.image}/>
          <p className="text-white text-center font-Kanit text-2xl">
            {items.text}
          </p>
          </motion.div>
          
        )
       })}
      </div>
    </div>
  )
}

export default Skills