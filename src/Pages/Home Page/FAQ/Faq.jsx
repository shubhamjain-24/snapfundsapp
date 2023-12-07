import React, { useState } from "react";
import "./Faq.css";
import Faq_main from "./Faq_main";
import { questions } from "./faq_data";

const Faq = () => {
  // State to manage FAQ data
  const [data, setData] = useState(questions);

  return (
    <div className="faq_outer_mainContainer">
      {/* FAQ Header Section */}
      <div className="faq_outer_textDiv">
        <div className="faq_outer_headText">FAQ's</div>
        <div className="faq_outer_subtext">
          Unlock Your Financial Journey: All Your Loan Questions Answered. Our FAQ Section Guides You Through a Seamless Borrowing Experience.
        </div>
      </div>

      {/* FAQ Data Section */}
      <div className="faq_outer_dataDiv">
        {data.map((curElem) => {
          const { id } = curElem;
          return <Faq_main key={id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
