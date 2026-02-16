import { useEffect, useRef, useState } from "react";
import "./Scanner.css";
import { IoCameraReverse } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
export default function Scanner() {
  const [footer, setFooter] = useState<boolean>(true);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const GetVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } },
      })
      .then((stream) => {
        const video = videoRef.current;

        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    GetVideo();
  }, [videoRef]);

  const toLogin = () => {
    navigate("/AeroId/Login");
  };
  const toBoarding = () => {
    navigate("/AeroId/BoardingPass");
  };

  return (
    <div className="scanner">
      <div className="scannerHeader">
        <div onClick={toLogin} className="closeBtn hdElement">
          <IoCloseSharp />
        </div>
        <div className="scanState hdElement">
          <div className="point"></div>
          <div className="scanStatus">ENCRYPTED LIVE LINK</div>
        </div>
        <div onClick={toBoarding} className="revCamera hdElement">
          <IoCameraReverse />
        </div>
      </div>
      <div className="scannerMain">
        <div className="videoContainer" style={{ position: "relative" }}>
          <video ref={videoRef} className="screen" playsInline muted />
          <div className="face"></div>
        </div>
      </div>
      {footer && (
        <div className="scannerFooter">
          <div
            className="line"
            onClick={() => {
              setFooter(false);
            }}
          ></div>
          <div className="footerHelper">
            <h2>Position your face</h2>
            <p>
              Align your head with the guide above. Ensure your eyes are clearly
              visible and avoid wearing masks or heavy eyewear.
            </p>
          </div>
          <div className="footerImg">
            <LuScanFace />
          </div>
          <ul className="footerCredentials">
            <li>Secure</li>
            <li>Decentralized</li>
            <li>AeroId verified</li>
          </ul>
        </div>
      )}
    </div>
  );
}
