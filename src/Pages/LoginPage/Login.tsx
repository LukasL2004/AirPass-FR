import "./Login.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import type React from "react";

export default function Login() {
  const navigate = useNavigate();

  // const toPass = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   navigate("/AeroID/BoardingPass");
  // };

  const toScanner = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/AeroID/Scanner");
  };

  return (
    <div className="login">
      <div className="header">
        <GiAirplaneDeparture className="icon" />
        <h1 className="title">
          Your Face, Your <br /> Ticket.
        </h1>
        <p className="subtext">
          Secure your seat with decentralized <br /> biometric identity. No
          passports, no <br /> paper.
        </p>
      </div>
      <div className="container">
        <div className="body">
          <form onSubmit={toScanner}>
            <div className="inp">
              <label htmlFor="" className="inputLabel">
                FULL LEGAL NAME
              </label>
              <div className="helper">
                <MdOutlinePersonOutline className="formIcon" />
                <input placeholder="Laza Lukas" type="text" className="input" />
              </div>
            </div>
            <div className="inp">
              <label htmlFor="" className="inputLabel">
                FLIGHT NUMBER
              </label>
              <div className="helper">
                <MdAirplaneTicket className="formIcon" />
                <input placeholder="RO 410" type="text" className="input" />
              </div>
            </div>
            <div className="btn">
              <button type="submit">
                Create Secure ID <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
        <div className="footer">
          <div className="securityMessage">
            <FaLock />
            <p>Your data is encrypted and stored locally</p>
          </div>
        </div>
      </div>
      <div className="appStatus">
        <div className="point"></div>
        <p className="status">SYSTEM OPERATIONAL</p>
      </div>
    </div>
  );
}
