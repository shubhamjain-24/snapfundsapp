import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserCheck } from "react-icons/fa";
import { IoMdCalculator } from "react-icons/io";
import { MdPlaylistAddCheck } from "react-icons/md";
import { FaUserClock } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="Timeline_mainContainer">
      {/* Timeline Heading */}
      <div className="Timeline_headText">
        Streamlined Loan Approval Process: Your Comprehensive Timeline Guide
      </div>

      {/* Timeline Container */}
      <div className="Timeline-subContainer">
        <VerticalTimeline lineColor="#000">
          {/* Step 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgba(129, 138, 224)", color: "#fff" }}
            icon={<FaUserCheck />}
            date="STEP 1"
          >
            <h3 className="Timeline_cardText1">Login</h3>
            <p className="Timeline_cardText2">
              Access your secure account by logging in. Provide your credentials
              to begin your loan application process with confidence.
            </p>
          </VerticalTimelineElement>

          {/* Step 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgba(129, 138, 224)", color: "#fff" }}
            icon={<IoMdCalculator />}
            date="STEP 2"
          >
            <h3 className="Timeline_cardText1">Calculate</h3>
            <p className="Timeline_cardText2">
              Utilize our advanced loan calculator to tailor your loan amount
              and repayment plan. Understand your financial commitment before
              proceeding.
            </p>
          </VerticalTimelineElement>

          {/* Step 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgba(129, 138, 224)", color: "#fff" }}
            icon={<MdPlaylistAddCheck />}
            date="STEP 3"
          >
            <h3 className="Timeline_cardText1">Apply</h3>
            <p className="Timeline_cardText2">
              Complete the straightforward application form. Share essential
              details to help us assess your eligibility and customize the loan
              terms to your needs.
            </p>
          </VerticalTimelineElement>

          {/* Step 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgba(129, 138, 224)", color: "#fff" }}
            icon={<FaUserClock />}
            date="STEP 4"
          >
            <h3 className="Timeline_cardText1">Wait for Approval</h3>
            <p className="Timeline_cardText2">
              Relax as our team reviews your application. We strive to provide a
              swift and transparent approval process, keeping you informed every
              step of the way.
            </p>
          </VerticalTimelineElement>

          {/* Step 5 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgba(129, 138, 224)", color: "#fff" }}
            icon={<MdOutlinePayments />}
            date="STEP 5"
          >
            <h3 className="Timeline_cardText1">Pay the Repayments</h3>
            <p className="Timeline_cardText2">
              Once approved, manage your repayments seamlessly. Stay organized
              with our user-friendly interface and flexible payment options.
            </p>
          </VerticalTimelineElement>

          {/* Step 6 */}
          <VerticalTimelineElement
            className="vertical-timeline-element"
            iconStyle={{ background: "rgba(129, 138, 224)", color: "#fff" }}
            icon={<FaCheckCircle />}
            date="STEP 6"
          >
            <h3 className="Timeline_cardText1">Loan Repayment Complete</h3>
            <p className="Timeline_cardText2">
              Celebrate financial success as you make your final repayment.
              Congratulations on successfully completing your loan journey with us.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
