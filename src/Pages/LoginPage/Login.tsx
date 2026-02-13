import "./Login.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="header">
          <GiAirplaneDeparture className="icon" />
          <h1 className="title">Your Face, Your Ticket.</h1>
          <p className="subtext">
            Secure your seat with decentralized biometric <br /> identity.No
            passports, no paper.
          </p>
        </div>
        <div className="body">
          <form action="">
            <label htmlFor=""> FULL LEGGAL NAME</label>
            <input type="text" className="input" />
            <label htmlFor=""> FLIGHT NUMBER</label>
            <input type="text" className="input" />
            <button type="submit">
              Create Secure ID <FaArrowRight />
            </button>
          </form>
          <div className="footer">
            <div className="securityMessage">
              <FaLock />
              <p>Your data is encrypted and stored locally</p>
            </div>
            <div className="appStatus">
              <div className="point"></div>
              <p className="status">SYSTEM OPERATIONAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
