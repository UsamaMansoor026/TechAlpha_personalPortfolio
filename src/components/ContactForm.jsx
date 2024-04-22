import React from "react";
import contactImg from "../assets/contact.png";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="px-3 md:px-[70px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0"
    >
      <div className="flex items-center justify-center lg:justify-start">
        <img
          src={contactImg}
          className="w-[80%] object-cover aspect-square"
          alt=""
        />
      </div>
      <div className="bg-white/40 py-12 lg:py-7 px-7  md:mx-4 lg:mx-0 rounded-lg flex flex-col gap-6">
        <h1 className="text-[#5127db] uppercase text-2xl lg:text-3xl font-semibold">
          Contact with Me
        </h1>

        <div className="flex flex-col justify-center gap-8 h-full">
          <div className="flex items-center gap-4">
            <p className="mt-1.5">
              <ion-icon name="mail"></ion-icon>
            </p>
            <p>usamamansoor79@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="mt-1.5">
              <ion-icon name="call"></ion-icon>
            </p>
            <p>+923345103146</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="mt-1.5">
              <ion-icon name="home"></ion-icon>
            </p>
            <p>Chak 47 NB, sargodha</p>
          </div>
        </div>

        {/* <form action="#" className="w-full">
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name..."
            required
            className="w-full block bg-transparent border border-[#5127db] outline-none py-2 pl-4 text-my-fontColor placeholder:text-my-fontColor rounded-lg focus:border-[1.5px]"
          />
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email..."
            required
            className="w-full block bg-transparent border border-[#5127db] outline-none py-2 pl-4 my-4 text-my-fontColor placeholder:text-my-fontColor rounded-lg focus:border-[1.5px]"
          />
          <textarea
            id="message"
            placeholder="Your Message Here..."
            required
            className="min-h-[100px] w-full block bg-transparent border border-[#5127db] outline-none py-2 pl-4 text-my-fontColor placeholder:text-my-fontColor rounded-lg focus:border-[1.5px]"
          />
          <input
            type="submit"
            value="Send Message"
            className="w-full bg-[#5127db] py-2 rounded-lg border-none outline-none my-4 text-white cursor-pointer hover:bg-[#3f21a5] duration-300"
          />
        </form> */}
      </div>
    </section>
  );
};

export default ContactForm;
