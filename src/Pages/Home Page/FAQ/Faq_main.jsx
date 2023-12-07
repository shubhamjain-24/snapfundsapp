import React, { useState } from "react";
import "./Faq.css";
// import "../../style.css";

import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const FaqMain = ({ question, answer }) => {
  // State to manage the visibility of the answer
  const [show, setShow] = useState(false);

  // Function to toggle the visibility of the answer
  const toggleAnswer = () => {
    setShow(!show);
  };

  return (
    <div className="faq_mainContainer">
      {/* Question Container */}
      <div
        className={`faq_questionContainer ${show ? "expanded" : ""}`}
        onClick={toggleAnswer}
      >
        <h3 className="faq_question">{question}</h3>
        {/* Plus or Minus Icon based on visibility */}
        <p className="faq_icon">{show ? <BiMinus /> : <BsPlusLg />}</p>
      </div>

      {/* Answer Container */}
      <div className={`faq_answerDiv ${show ? "show" : ""}`}>
        <p className="faq_answer">{answer}</p>
      </div>
    </div>
  );
};

export default FaqMain;
