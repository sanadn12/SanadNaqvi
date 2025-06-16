"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getWhatsAppLink = () => {
    const phoneNumber = "9324078235";
    const text = `My name is ${name}\nEmail: ${email}\n${message}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(getWhatsAppLink(), "_blank");
  };

  return (
    <div className="py-10 mt-16 text-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-Syne mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg"
        >
          Send Message 
        </button>
      </form>
    </div>
  );
};

export default Contact;
