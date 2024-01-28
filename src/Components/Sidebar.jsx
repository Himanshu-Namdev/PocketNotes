import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Plus from "./Assets/Plus.png";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white w-[25%] h-[100vh] ">
      <h1 className="text-black font-[roboto] text-[32px] m-3 mx-5 font-normal">
        Pocket Notes
      </h1>
      <button
        onClick={handleModalOpen}
        className="bg-black text-white rounded-full flex justify-center items-center w-[80%] p-2 mx-auto my-8 font-normal text-[27px] font-[roboto]"
      >
        <img src={Plus} alt="+" className="text-white mx-4" />
        Create Notes group
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[20%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md w-[740px] h-[350px]">
            <h2 className="text-2xl font-medium mb-4 text-[29px]">
              Create New Notes group
            </h2>
            <div className="w-full flex justify-center items-center my-10 ">
              <h1 className="font-medium text-[27px] ">Group Name</h1>
              <input
                type="text"
                className="w-[65%] text-[23px] text-[#979797] rounded-full p-1 px-5 mx-5 border border-[#979797] outline-none"
              />
            </div>
            <div className="w-full flex justify-center items-center my-10 ">
              <h1 className="font-medium text-[27px] ">Choose colour</h1>
              <div className="flex mx-[70px]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#B38BFA] w-[40px] h-[40px] rounded-full mx-1.5"
                ></motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#FF79F2] w-[40px] h-[40px] rounded-full mx-1.5"
                ></motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#43E6FC] w-[40px] h-[40px] rounded-full mx-1.5"
                ></motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#F19576] w-[40px] h-[40px] rounded-full mx-1.5"
                ></motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#0047FF] w-[40px] h-[40px] rounded-full mx-1.5"
                ></motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#6691FF] w-[40px] h-[40px] rounded-full mx-1.5"
                ></motion.button>
              </div>
            </div>
            <button
              className="text-white bg-black rounded-md px-7 py-1 text-[20px] absolute bottom-5 right-5 "
              onClick={handleModalClose}
            >
              Create
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div></div>
    </div>
  );
};

export default Sidebar;
