import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link ,useNavigate } from 'react-router-dom';
const Navbar = ({scrollToSection}) => {
  const NavItems = [
    { name: "Home", id: "home" ,path:"/"},
    { name: "Experience", id: "experience" , path:"/experience" },
    { name: "Projects", id: "projects" , path:"/projects"},
    { name: "Skills", id: "skills" , path:"/skills"},
    { name: "Contact", id: "contact" ,path:"/contact" },
  ];
  const [nav,setNav] = useState(false);
  const navigate = useNavigate();
  const clickNav = ()=>{
    setNav(!nav);
  }

  // const handleNavLinkClick = (sectionId) => {
  //   console.log(sectionId);
  //   navigate(`#${sectionId}`);
  // };
  
  return (
    <div className="fixed w-full h-[80px] bg-[#000119] justify-between flex items-center px-4 text-white font-Kanit">
      <div>
        <h1>JamilReza</h1>
      </div>
      <div className='hidden sm:flex mx-[550px] '>
      {
        NavItems.map((items)=>{
          // console.log(items);
          return(
            <ul 
            key={items.id}
            className="hidden sm:flex mx-[50px] cursor-pointer"
            // onClick={() => scrollToSection(items.id)}
            >
           <li><Link to={items.path} onClick={()=>scrollToSection(items.id)}>{items.name}</Link></li>
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
          <li 
          key={items.id}
          // onClick={() => scrollToSection(items.id)}
          className='py-6 text-4xl'>
            <Link to={items.path} onClick={()=>{scrollToSection(items.id);setNav(!nav)}}>{items.name}</Link>
            </li>
        )
      })}
      </ul>
      
      </div>
    </div>
  )
}

export default Navbar