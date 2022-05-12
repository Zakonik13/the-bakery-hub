import React from "react";

const Opened = ({ workHours }) => {
  return (
    <>
      {workHours === [] ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex">
            <p className="day-spacer hour-title">Sunday</p>

            {workHours[0][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[0][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[1][1]}</p>
              </>
            )}
          </div>
          <div className="flex">
            <p className="day-spacer hour-title">Monday</p>

            {workHours[2][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[2][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[3][1]}</p>
              </>
            )}
          </div>
          <div className="flex">
            <p className="day-spacer hour-title">Tuesday</p>

            {workHours[4][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[4][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[5][1]}</p>
              </>
            )}
          </div>
          <div className="flex">
            <p className="day-spacer hour-title">Wednesday</p>

            {workHours[6][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[6][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[7][1]}</p>
              </>
            )}
          </div>
          <div className="flex">
            <p className="day-spacer hour-title">Thursday</p>

            {workHours[8][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[8][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[9][1]}</p>
              </>
            )}
          </div>
          <div className="flex">
            <p className="day-spacer hour-title">Friday</p>

            {workHours[10][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[10][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[11][1]}</p>
              </>
            )}
          </div>
          <div className="flex">
            <p className="day-spacer hour-title">Saturday</p>

            {workHours[12][1] === "000" ? (
              <p style={{ marginLeft: "15px", color: "white" }}>Closed</p>
            ) : (
              <>
                <p style={{ marginLeft: "15px", color: "white" }}>
                  {workHours[12][1]}-
                </p>
                <p style={{ color: "white" }}>{workHours[13][1]}</p>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Opened;
