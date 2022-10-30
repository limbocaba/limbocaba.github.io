import React from "react";
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <h2>About Me</h2>
      <h2>Projects</h2>
      <h2>Contact</h2>
      <img
        src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        alt="github logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
        alt="linkedin page"
      />
    </div>
  );
}

export default Nav;
