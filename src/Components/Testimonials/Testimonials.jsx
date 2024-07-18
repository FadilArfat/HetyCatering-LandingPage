import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/hety-user-1.png";
import user_2 from "../../assets/hety-user-2.png";
import user_3 from "../../assets/hety-user-3.png";
import user_4 from "../../assets/hety-user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Diana</h3>
                  <span>Wedding Planner</span>
                </div>
              </div>
              <p>
                "Hety Catering benar-benar mengubah acara pernikahan kami
                menjadi pengalaman yang sempurna! Makanan lezat, pelayanan crew
                yang profesional, dan dekorasi yang indah membuat hari istimewa
                kami semakin berkesan. Sangat direkomendasikan!""
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Budi</h3>
                  <span>Pemilik Usaha</span>
                </div>
              </div>
              <p>
                "Saya menggunakan Hety Catering untuk acara peluncuran produk
                kami, dan saya sangat puas! Menu yang bervariasi, layanan cepat,
                dan dekorasi yang menarik berhasil menciptakan suasana yang
                tepat. Terima kasih, Hety Catering!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Rina</h3>
                  <span>Ibu Rumah Tangga</span>
                </div>
              </div>
              <p>
                "Untuk ulang tahun anak saya, saya memilih Hety Catering, dan
                semuanya luar biasa! Anak-anak dan tamu dewasa semua suka dengan
                makanan yang disajikan. Crew mereka sangat ramah dan membantu.
                Pasti akan menggunakan layanan mereka lagi!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Andi</h3>
                  <span>Event Organizer</span>
                </div>
              </div>
              <p>
                "Saya sering bekerja dengan Hety Catering untuk berbagai acara,
                dan saya selalu terkesan. Mereka tidak hanya menyediakan makanan
                enak, tetapi juga tim yang sangat profesional dan dekorasi yang
                kreatif. Mereka selalu menjadi pilihan utama saya!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
