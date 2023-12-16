import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Hero.css";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div class="container py-5">
      <div class="text-center container">
        <h1 class="display-1">Ritesh Dwivedi</h1>
        <div class="lead">
          {" "}
          Passionate about changing the world with technology.{" "}
        </div>
        <LinkedInIcon />
        <GitHubIcon />
        <InstagramIcon />
      </div>
      <Button href="#text-buttons" className="custom-button">
        More About Me
      </Button>
    </div>
  );
};

export default Hero;
