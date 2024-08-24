import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the form submission, such as sending the data to a server
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);
    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section
        className="w3-container w3-card-4 w3-light-grey w3-text-gray w3-margin"
        style={{
          backgroundImage: `url(${require("../assets/pexels-pixabay-207456.jpg")})`,
          backgroundSize: "cover",
          padding: "2%",
          height:"50%"
        }}
      ></section>

      <section
        className="w3-container w3-card-4 w3-light-grey w3-text-gray w3-margin"
        style={{ padding: "2%" }}
      >
        <h2 className="w3-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="w3-container">
          <div className="w3-section">
            <label>Name</label>
            <input
              className="w3-input w3-border"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="w3-section">
            <label>Email</label>
            <input
              className="w3-input w3-border"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w3-section">
            <label>Message</label>
            <textarea
              className="w3-input w3-border"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="w3-button w3-blue w3-right">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
