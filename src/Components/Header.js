import React from "react";

const Header = ({ title, modalOpen }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={modalOpen}>
        <i className="fa fa-plus" style={{ margin: "5px" }} />
        Create User
      </button>
    </header>
  );
};

export default Header;
