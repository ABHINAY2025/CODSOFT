import React, { useState } from "react";
import Fotter from "./Fotter";

export default function calculator() {
  const [num, setnum] = useState("");
  const handleInputChange = (e) => {
    setnum(e.target.value);
  };
  const getButtonClasses=(index)=>{
    if (index === 12) {
        return 'bg-red-500 hover:bg-red-400 py-4  w-[450%] rounded-t-xl text-xl '; // unique red style for clear button
      }else if(index==11){
         return 'bg-green-500 hover:bg-green-400 py-4  rounded-t-xl text-xl' // unique green style for "=" button
      }
      return " bg-sky-400 hover:bg-sky-500  rounded-t-xl text-xl py-4"; // default blue style for other buttons
    };
  const handleclick = (buttonvalue) => {
    try {
      if (buttonvalue == "=") {
        setnum(eval(num).toString());
      } else if (buttonvalue == "CLEAR") {
        setnum("");
      } else {
        setnum(num + buttonvalue);
      }
    } catch {
      setnum("Error");
      setTimeout(() => {
        setnum("");
      }, 2000);
    }
  };
  return (
    <>
      <div className="bg-blue-100  flex flex-col  items-center justify-center w-full h-screen">
    <h1 className="text-2xl font-bold ">CALCULATOR</h1>
        <div className=" mt-5 bg-sky-300 rounded-xl  w-[30%]">
          <input
          className="w-[95%] mx-3 px-2 my-3 rounded-xl py-4 text-xl"
            type="text"
            value={num}
            onChange={handleInputChange}
          />
          <div className=" grid grid-cols-4 py-5 px-5 gap-4 rounded-b-2xl bg-sky-300">
            {[
              "7",
              "8",
              "9",
              "+",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "=",
              "CLEAR",
            ].map((button,index) => (
              <button
              className={getButtonClasses(index)}
                key={index}
                onClick={() => handleclick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <Fotter />
      </div>
    </>
  );
}
