import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Selamat Datang di Hety Catering!</h1>
        <p>
          Di Hety Catering, kami percaya bahwa setiap momen berharga layak
          dirayakan dengan cita rasa yang istimewa. Dengan pengalaman
          bertahun-tahun dalam menyediakan hidangan berkualitas, kami siap
          menghidangkan berbagai pilihan menu yang menggugah selera, dari
          masakan tradisional hingga modern. Baik untuk acara kecil maupun
          perayaan besar, tim kami berkomitmen untuk memberikan pelayanan
          terbaik dan pengalaman kuliner yang tak terlupakan. Mari buat acara
          Anda semakin spesial dengan hidangan lezat dari Hety Catering!
        </p>
        <button className="btn">
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Pesan Sekarang <img src={dark_arrow} alt="" />{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
