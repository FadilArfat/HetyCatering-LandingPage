import React from "react";
import "./About.css";
import about_img from "../../assets/hety-about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>TENTANG HETY CATERING</h3>
        <h2>Lezat Bersama, Berbagi Cinta!</h2>
        <p>
          Selamat datang di Hety Catering, di mana setiap momen istimewa Anda
          kami wujudkan dengan penuh cita rasa dan keindahan. Dengan pengalaman
          bertahun-tahun di industri catering, kami menawarkan layanan catering
          yang tidak hanya memanjakan lidah, tetapi juga memikat mata. Kami
          menyediakan berbagai pilihan menu yang disesuaikan dengan kebutuhan
          dan selera Anda, mulai dari hidangan tradisional hingga kontemporer.
        </p>
        <p>
          Tim layanan kami yang profesional siap memberikan pelayanan terbaik,
          memastikan setiap acara berjalan lancar dan berkesan. Tidak hanya
          catering, Hety Catering juga menawarkan layanan dekorasi yang elegan
          dan kreatif, menjadikan setiap acara Anda tak terlupakan.
        </p>
        <p>
          Kami percaya bahwa setiap detail penting, dan kami berkomitmen untuk
          memberikan pengalaman yang sempurna dari awal hingga akhir. Percayakan
          momen spesial Anda kepada Hety Catering dan nikmati layanan yang
          berkualitas, rasa yang luar biasa, dan dekorasi yang menawan.
        </p>
      </div>
    </div>
  );
};

export default About;
