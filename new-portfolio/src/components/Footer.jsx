import React from "react";
import "../comp-css/Footer.css";
import linkedLogo from "../images/linkedin.png";
import gitLogo from "../images/GitHub32.png";

function Footer() {
  const handleClickLinked = () => {
    window.open("https://www.linkedin.com/in/jorielcaba2002/", "_blank");
  };

  const handleClickGit = () => {
    window.open("https://www.github.com/limbocaba", "_blank");
  };

  return (
    <div className="footer">
      <div className="linked">
        <img
          className="linkedin"
          alt="LinkedIn"
          src={linkedLogo}
          onClick={handleClickLinked}
        />
      </div>
      <div className="git">
        <img
          className="git-logo"
          alt="GitHub"
          src={gitLogo}
          onClick={handleClickGit}
        />
      </div>
    </div>
  );
}

export default Footer;
