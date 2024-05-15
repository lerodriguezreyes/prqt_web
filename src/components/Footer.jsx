import React from "react";

function footer() {
  return (
    <>
      <div className="footerWrapper">
        <p className="footerText">
          {" "}
          Copyright © 2024 Puerto Rico Quiere Tech - All Rights Reserved.
        </p>
        <div className="ironTextWrapper">
        <p className="ironText">
          {" "}
          Powered by{" "} </p>
          <img
          className="ironLogo"
            src="https://res.cloudinary.com/dw1igjvgi/image/upload/v1715730606/PRQT/Backgrounds/ironhacklogo_h1l2zk.png"
          />{" "}
      </div>
      </div>
      
    </>
  );
}

export default footer;
