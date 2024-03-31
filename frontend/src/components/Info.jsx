import { useState } from "react";

export default function Info(props) {
  const [moreInfoCheck, setMoreInfoCheck] = useState(false);

  return (
    <div className="info-container">
      <div className="speed-container">
        <h1>
          {props.speed ? props.speed : 0}
          <span id="speed-unit">Mbps</span>
        </h1>
      </div>
      <div id="extra-info">
        {!moreInfoCheck ? (
          <button id="info-button" onClick={() => setMoreInfoCheck(true)}>
            Show More Info
          </button>
        ) : (
          <div>
            <p className="more-info">User IP: {props.ip}</p>
            <p className="more-info">User Location: {props.location}</p>
            <button id="info-button" onClick={() => setMoreInfoCheck(false)}>
              Hide Info
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
