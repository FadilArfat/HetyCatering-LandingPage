import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/hety-galerry-1.png";
import gallery_2 from "../../assets/hety-galerry-2.png";
import gallery_3 from "../../assets/hety-galerry-3.png";
import gallery_4 from "../../assets/hety-galerry-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        Lihat Lainnya <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
