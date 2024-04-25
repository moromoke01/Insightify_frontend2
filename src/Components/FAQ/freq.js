import React, { useState } from 'react';
import './freq.css';

function Question({ ques, answ }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnsw = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`p-5 border-b border-gray-300 mb-2 last:border-b-0 ${isOpen ? 'open-bg' : 'bg-white floating-shadow'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnsw}>
        <h2 className={`text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-relaxed`}>{ques}</h2>
        <span className={`text-xl transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">{answ}</p>}
    </div>
  );
}
function Freq() {
  return (
    <div className="max-w-5xl  mx-auto my-5 p-5 bg-gray-100 rounded-lg shadow-lg">
      <Question
        ques="What is HTML?"
        answ="HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications."
      />
      <Question
        ques="What is CSS?"
        answ="CSS stands for Cascading Style Sheets. It is used for styling the presentation of web pages written in HTML and XML."
      />
      <Question
        ques="What is JavaScript?"
        answ="JavaScript is a programming language that enables interactive web pages. It is commonly used for client-side scripting, game development, and server-side development with Node.js."
      />
      <Question
        ques="What is the difference between margin and padding?"
        answ="Margin is the space outside the border of an element, while padding is the space inside the border of an element."
      />
      <Question
        ques="What is responsive web design?"
        answ="Responsive web design is an approach to design web pages that ensure optimal viewing and interaction experience across a wide range of devices, from desktop computers to mobile phones."
      />
    </div>
  );
}
export default Freq;