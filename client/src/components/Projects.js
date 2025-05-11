import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import ModalComponent from './ModalComponent';
const Projects = () => {
  const projects = [
    { 
      id:1,
      name:"IDLC Securities Limited Customer App",
      liveLink:"https://app7.idlc.com:9999/sl-prototype/",
      // description:"The project was for a restaurant which had China-Bangladesh joint ownership. This project had both the server-side and client-side.Client-Side: In the client side a brief overview of the interior of the restaurants as well as some signature dishes have been provided. In the front-end there was some functionalities such as placing order online and how much items can be ordered as well as updating total cost along with the number of items that are being ordered and also created a form component for reserving a table. Besides the api calls that were made here are rest apis. We have implemented JavaScript library react to accomplish the client side along with tailwind CSS , DaisyUI and animation library from react.Server-Side:In the server-side we created api's for placing order and for booking as well. In order to accomplish our task we have implemented node , express and mysql. To store data we have used the mysql database."
    },
    { 
      id:2,
      name:"IDLC Customer App Asset Management",
      liveLink:"https://app7.idlc.com:9999/aml-prototype/",
      // description:"The project was for a restaurant which had China-Bangladesh joint ownership. This project had both the server-side and client-side.Client-Side: In the client side a brief overview of the interior of the restaurants as well as some signature dishes have been provided. In the front-end there was some functionalities such as placing order online and how much items can be ordered as well as updating total cost along with the number of items that are being ordered and also created a form component for reserving a table. Besides the api calls that were made here are rest apis. We have implemented JavaScript library react to accomplish the client side along with tailwind CSS , DaisyUI and animation library from react.Server-Side:In the server-side we created api's for placing order and for booking as well. In order to accomplish our task we have implemented node , express and mysql. To store data we have used the mysql database."
    },
    {
      id:3,
      name:"D-Tech Project Management",
      liveLink:"https://pmclient.dholdingsltd.com/",
      description:"It's an ERP project. Our project was basically on two ERP modules. One of which is HR and the other is accounts. In order to accomplish our projects we have implemented JavaScript library react as client-side and Node , Express and Mysql for server-side. HR:In out HR module we have admin and user panel. We have created authentication and authorization for the admin. We have done the same for the user as well . In our project the admin had the privilege to add user or delete or update the relevant user Info.Accounts:This is another module we add customers . And the customers must have relevant different rates on the basis of which we perform calculations. After updating calculations we update in the maintable where the customers. In our project we search customers on monthly basis. This was done in front-end apart from that we have also filtration based on customer name and some other relevant fields. We have created the excel file upload panel which will actually update customers, maintable and diffrate table existing on the database."
    },
    {
      id:4,
      name:"D-Tech Client Management",
      liveLink:"https://hrclient.dholdingsltd.com/",
      description:"This is also one of our company projects . In this part all the activities and necessary info regarding our client have been divided into 5 sections (Home, About, Service, Our Work, Contact ) . We have implemented the JavaScript library React to create a structure for our project and we have added tailwind CSS along with several animation features from react library such as framer motion and react-reveal."
    },
    {
      id:5,
      name:"Sumon-Enterprise",
      liveLink:"https://sumon-enterprise.com/",
      description:"his is one of our company projects where we have been assigned to build a client side website. In order to complete the project we have used the JavaScript library react and we have integrated it with tailwind-css to make the website look beautiful. Besides we have also added animation to our projects using different animation library such as react-reveal or framer-motion."
    }

  ]
  const [show,setShow] = useState(false);
  const [project,setShowProject] = useState(null);
  const handlShowModal = (project)=>{
    setShow(true);
    setShowProject(project);
  }
  const handleCloseModal = ()=>{
    setShow(false);
    setShowProject(null);
  }
  return (
    <>
     <div id="projects">
      
      <div className="text-white font-Lato text-4xl p-8 text-center">
      <p className=" text-white font-Lato text-4xl m-8">Projects Completed</p>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      {projects.map((item,index)=>{
       return(
         <motion.div className='card border-2 rounded-xl p-4 m-4 items-center hover:bg-white hover:text-black'
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         >
           {/* {expandedIndex===index?<div className="bg-white text-black text-center text-2xl">
             <p className="text-4xl font-semibold m-4">{item.name} Project</p>
             <p>{item.description}</p>
             <button onClick={()=>{ClickDesc(index)}}>-</button>
           </div>:
           <div className="text-center">
           <p><a href={item.liveLink}>{item.name}</a></p>
           <button className="m-auto" onClick={()=>{ClickDesc(index)}}>+</button>
           </div>
           } */}
           <a target='_blank' href={item?.liveLink}>{item.name}</a>
           
           
         </motion.div>
       )
      })}
      </div>
      
      </div>
     </div>
     {show && project && (<ModalComponent
     onClose={handleCloseModal}
     isOpen={handlShowModal}
     content={()=>{
      return(
        <div className='flex flex-col justify-center align-center'>
          <h1 className='font-Kanit font-semibold text-center text-2xl'>{project.name}</h1>
          <p className='font-Kanit text-center'>{project.description}</p>
        </div>
      )
     }}
     />)}
    </>
   
  )
}

export default Projects