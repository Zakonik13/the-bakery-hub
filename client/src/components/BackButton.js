import React from "react";
import back from "../images/back.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="go-back">
      <div>
        {" "}
        <img
          alt="back-button"
          className="back-button"
          src={back}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default BackButton;
