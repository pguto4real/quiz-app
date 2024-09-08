import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";

export const Arrow = ({ functionData ,prev}) => {

  return (
    <div className='px-5 flex items-start w-full cursor-pointer' onClick={()=>functionData(prev)}>
        <IoArrowBackSharp size='40px'/>
        </div>
  );
};
