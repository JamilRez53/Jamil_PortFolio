import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import PortFolio from '../assets/IMG_7719.jpg';

const Home = ({scrollToSection}) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: '#000119',
      color: 'white',
    },
  };

  return (
    <div className='flex flex-col-reverse justify-center pt-24 items-center md:flex-row  bg-[#000119]'>
      <div className='flex flex-col w-80 px-4 py-2 justify-center items-center'>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-[#cccccc] text-center text-lg font-Kanit'
              >
                Jamil Reza
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-[#cccccc] text-center text-lg font-Kanit'
              >
                Assistant Software Engineer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-[#cccccc] text-center text-lg font-Kanit'
              >
                IDLC Finance PLC
              </motion.p>
          <motion.button
          onClick={()=>scrollToSection('projects')}
            variants={buttonVariants}
            whileHover='hover'
            className='flex w-52 gap-2 font-Kanit border-2 px-6 py-2 my-2 items-center shadow-white hover:shadow-blue-800 shadow-lg bg-white hover:bg-blue-800 hover:border-blue-800 hover:text-white'
          >
            View Projects
            <span>
              <HiArrowNarrowRight/>
            </span>
          </motion.button>
      </div>
      <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className='flex justify-center items-center'
      >
      <img

        src={PortFolio}
        className='w-48 h-48 border-8 shadow-lg shadow-white'
        alt='Portfolio'
      />
      </motion.div>
      
    </div>
  );
};

export default Home;
