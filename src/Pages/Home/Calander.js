import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calander = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex justify-center">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calander;
