import React from "react";
import "./Programs.css";
import program_1 from "../../assets/hety-program-1.png";
import program_2 from "../../assets/hety-program-2.png";
import program_3 from "../../assets/hety-program-3.png";
import program_icon_1 from "../../assets/hety-program-icon-1.png";
import program_icon_2 from "../../assets/hety-program-icon-2.png";
import program_icon_3 from "../../assets/hety-program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Catering</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Service Crew</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Decor</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
