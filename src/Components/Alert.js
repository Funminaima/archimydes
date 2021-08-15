import React from "react";

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" />
        {alert.msg}
        <i
          className="fa fa-times"
          style={{ float: "right", cursor: "pointer" }}
          onClick={closeAlert}
        ></i>
      </div>
    )
  );
};

export default Alert;
