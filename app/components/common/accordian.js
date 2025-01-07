import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" rounded mb-[0.5] border">
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center cursor-pointer py-4 px-6 bg-gray-200"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <i
          className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
        ></i>
      </div>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
