import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f5b64b8-2977-4691-9faf-4d773a8e7e45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Kirimkan Kami Pesan <img src={msg_icon} alt="" />
        </h3>
        <p>
          Kami siap membantu Anda merencanakan acara istimewa Anda! Jangan ragu
          untuk menghubungi kami untuk informasi lebih lanjut mengenai layanan
          catering, service crew, dan dekorasi.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@gmail.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            0822312313
          </li>
          <li>
            <img src={location_icon} alt="" />
            Jl. Suroharjo,Lampung <br /> Ma 02139, Indonesia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nama</label>
          <input type="text" name="name" placeholder="Masukan nama" required />
          <label>Nomor Handphone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Masukan nomor handphone"
            required
          />
          <label>Tulis Pesan mu Disini</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Masukan pesan"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Kirim Sekarang
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
