import React from "react";
import "./Address.css";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Address = () => {
  return (
    <>
      <div className="address_mainContainer">
        <div className="address_subContainer">
          <div className="address_subDiv1">
            <div className="address_formDiv">
              <div className="address_headText2">We're here to help.</div>
              <form className="address_form" action="">
                <input
                  className="address_input"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="address_input"
                  type="phone"
                  placeholder="Phone Number"
                />
                <input
                  className="address_input"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="address_input address_message_input"
                  type="text"
                  placeholder="Message"
                />
                <div className="address_button">Get in touch</div>
              </form>
            </div>
          </div>
          <div className="address_subDiv2">
            <div className="address_divdatadiv">
              <div className="address_sub2textDiv">
                <div className="address_div2headtext">Address</div>
                <div className="address_div2subtext">
                  J-1301 Jolly Residency, <br /> near Vijaya Laxmi hall, <br />
                  AB Road - Indore (452001)
                </div>
              </div>
              <div className="address_sub2textDiv">
                <div className="address_div2headtext">Call Us*</div>
                <div className="address_div2subtext">
                  +91 70165 22535 <br />
                  +91 70165 22535 <br />
                  +91 70165 22535 <br />
                </div>
              </div>
              <div className="address_sub2textDiv">
                <div className="address_div2headtext">Business Hours</div>
                <div className="address_div2subtext">
                  Monday to Saturday: <br /> 10:00 am to 7 pm <br />
                  Sunday & Public Holidays: Closed
                </div>
              </div>
            </div>

            {/* line 2 */}
            <div className="address_divdatadiv">
              <div className="address_sub2textDiv">
                <div className="address_div2headtext">Email:</div>
                <div className="address_div2subtext">
                  <b>For general inquiries:</b> <br />
                  <a
                    className="address_atag"
                    href="mailto:your-email@example.com"
                  >
                    contact@example.com
                  </a>
                </div>
                <br />
                <div className="address_div2subtext">
                  <b>For application assistance: </b> <br />
                  <a
                    className="address_atag"
                    href="mailto:your-email@example.com"
                  >
                    applications@example.com
                  </a>
                </div>
                <br />
                <div className="address_div2subtext">
                  <b>For documentation services:</b> <br />
                  <a
                    className="address_atag"
                    href="mailto:your-email@example.com"
                  >
                    documents@example.com
                  </a>
                </div>
              </div>
              <div className="address_sub2textDiv">
                <div className="address_div2headtext">Social Media</div>
                <div className="address_div2subtext">
                  <a
                    className="address_atag"
                    href="mailto:your-email@example.com"
                  >
                    {" "}
                    <BsInstagram /> Follow us on Instagram
                  </a>
                  <br />
                  <div
                    style={{ marginTop: "10px" }}
                    className="address_div2subtext"
                  >
                    <a
                      className="address_atag"
                      href="mailto:your-email@example.com"
                    >
                      <AiOutlineFacebook /> Follow us on Facebook
                    </a>
                  </div>
                  <br />
                  <div
                    style={{ marginTop: "-5px" }}
                    className="address_div2subtext"
                  >
                    <a
                      className="address_atag"
                      href="mailto:your-email@example.com"
                    >
                      <AiOutlineLinkedin /> Follow us on LinkedIn
                    </a>
                    <br />
                  </div>
                  <div
                    style={{ marginTop: "10px" }}
                    className="address_div2subtext"
                  >
                    <a
                      className="address_atag"
                      href="mailto:your-email@example.com"
                    >
                      <RiTwitterXLine /> Follow us on Facebook
                    </a>
                    <br />
                  </div>
                </div>
              </div>
              <div className="address_sub2textDiv">
                <div className="address_div2headtext">
                  Schedule a <br />
                  Consultation
                </div>
                <div className="address_div2subtext">
                  Use our online booking <br /> system on Website URL <br /> to
                  schedule a face-to-face <br /> or virtual appointment with{" "}
                  <br /> one of our expert consultants.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="address_subContainer2">
        <div className="address_subDiv3">
          <div className="address_sub2textDiv">
            <div className="address_div2headtext">Feedback and Suggestions</div>
            <div className="address_div2subtext">
              We value your input. Please email us at feedback@example.com with
              any feedback or suggestions on how we can serve you better.
            </div>
          </div>
        </div>
        <div className="address_subDiv4">
          <div className="address_sub2textDiv">
            <div className="address_div2headtext">Drop-in Visits</div>
            <div className="address_div2subtext">
              You can visit our office during business hours for a personal
              consultation. Appointments are preferred to ensure you receive
              immediate and undivided attention.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
