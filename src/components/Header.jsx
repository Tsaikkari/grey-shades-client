import React from "react";

function Header() {
  let greysgrid = false;
  return (
    <div>
      {greysgrid && (
        <h1>Get to know about colorful lives</h1>
      )}
    </div>
  );
}

export default Header;