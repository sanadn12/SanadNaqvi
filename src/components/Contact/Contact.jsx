import React from "react";
const Contact = () => {
    return (
      <div className="py-10 mt-16 text-white text-center">
        <h2 className=" text-3xl md:text-5xl font-bold font-Syne mb-6">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400" />
          <textarea placeholder="Your Message" className="w-full p-3 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400"></textarea>
          <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  