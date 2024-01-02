import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const NavItems = [
    {
      name:"Home"
    },
    {
      name:"Experience"
    },
    {
      name:"Projects"
    },
    {
      name:"Skills"
    },
    {
      name:"Contact"
    },
    ]
  const [nav,setNav] = useState(false);
  const clickNav = ()=>{
    setNav(!nav);
  }
  return (
    <div className="w-full h-[80px] bg-[#000119] justify-between flex items-center px-4 text-white font-Kanit">
      <div>
        <h1>JamilReza</h1>
      </div>
      <div className='hidden fixed sm:flex mx-[550px] '>
      {
        NavItems.map((items)=>{
          console.log(items);
          return(
            <ul className="hidden sm:flex mx-[50px] cursor-pointer">
           <li>{items.name}</li>
            </ul>
          
          )
          
        })
        
      }
      </div>
     
     
      <div onClick={clickNav} className="sm:hidden cursor-pointer z-10">
        {nav?<FaTimes/>:<FaBars/>}
      </div>
      
      <div className={nav?"absolute top-0 left-0 w-full h-screen cursor-pointer bg-black flex flex-col justify-center items-center":"hidden"}>
      <ul>
      {NavItems.map((items)=>{
        return(
          <li className='py-6 text-4xl'>{items.name}</li>
        )
      })}
      </ul>
      
      </div>
    </div>
  )
}

export default Navbar