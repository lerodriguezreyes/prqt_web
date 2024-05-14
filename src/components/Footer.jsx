import React from "react";

function footer() {
  return (
    <>
      <div className="footerWrapper">
        <p className="footerText"> Copyright © 2024 Puerto Rico Quiere Tech - All Rights Reserved.</p>
        <p className="footerText">
          {" "}
          Powered by{" "}
          <img src="https://res.cloudinary.com/dw1igjvgi/image/upload/v1715361523/PRQT/logo/Ironhack_Logo_no_backgorudn_kqbr2l.png" />{" "}
        </p>
      </div>
      <p className="love">
        Made with{" "}
        {
          <img
            width="20"
            height="20"
            src="https://github.com/lerodriguezreyes/react-kanban/blob/main/images/love.png?raw=true"
            alt="filled-like"
          />
        }
        {" "} by the PRQT Crew
      </p>
    </>
  );
}

export default footer;
