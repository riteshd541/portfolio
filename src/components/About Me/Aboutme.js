import React from "react";
import Button from "@mui/material/Button";
import kela from "../Assests/PP.png";
import resumePdf from "../Assests/your_resume.pdf";
import "./Aboutme.css";

const Aboutme = () => {
  const openResume = () => {
    window.open(resumePdf, "_blank");
  };

  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
      <div className="inside">
        <img src={kela} alt="My Profile Pic" className="profile-pic" />
        <p>
          My name is Ritesh Dwivedi. I’m an undergraduate of 2023 <br />
          from BBDITM at Lucknow with a degree in B.Tech. <br />
          I'm most passionate about giving back to the community, <br />
          and my goal is to pursue this passion within the field of software
          engineering. <br />
          In my free time, I like working on open source projects.
        </p>
      </div>
      <Button variant="outlined" onClick={openResume}>
        Resume
      </Button>
    </div>
  );
};

export default Aboutme;
