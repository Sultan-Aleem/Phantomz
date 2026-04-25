import { motion } from "motion/react";
import { contactIcons } from "../lib/info";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true); // disable button + show loading

    emailjs
      .sendForm(
        "service_cffhqf9",
        "template_arpkju1",
        formRef.current,
        "2xnKRyLuFi1bdd06C",
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true); // show "Sent"
          formRef.current.reset();

          // Optional: re-enable after 5 seconds
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          setIsSending(false);
          alert("Something went wrong.");
          console.log(error);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen mx-auto bg-Mblue-100 overflow-hidden "
    >
      {/* top-right circle */}
      <div className="absolute w-[45rem] h-[45rem] rounded-full bg-gradient-to-r from-[#154978] to-[#2787DE]  blur-[120px] -top-40 -right-40 opacity-70" />

      {/* bottom-left circle */}
      <div className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-[#154978] to-[#2787DE] blur-[120px] -bottom-40 -left-40 opacity-60" />

      {/* noise overlay */}
      <div className="absolute inset-0 pointer-events-none  mix-blend-overlay size-full bg-[url('/images/noise.png')]" />

      <div className=" lg:max-w-8xl mx-auto lg:px-10 py-24 px-7">
        <div>
          <h2 className="font-sekuya text-xl md:text-4xl lg:text-5xl tracking-wide text-Mblue-900 opacity-100 mx-auto  text-center ">
            Get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  my-24 lg:my-36 gap-x-24 gap-y-24">
          {/* form */}
          <div className=" flex flex-col gap-y-6 text-white">
            <div className=" flex flex-col bg-Mblue-400 backdrop-blur-3xl shadow-lg py-9 px-14 rounded-lg">
              <h3 className="text-center font-notoserif text-2xl md:text-3xl lg:text-4xl">
                Send A Mail
              </h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                id="contactForm"
                action=""
                className="flex flex-col gap-y-3 lg:gap-y-6"
              >
                <div className="flex flex-col gap-y-6">
                  <label htmlFor="" className="text-xl lg:text-2xl ">
                    Name
                  </label>
                  <input
                    name="name"
                    placeholder="E.g Daniel"
                    type="text"
                    className="outline-none bg-Mblue-200 button-style px-4 py-3 focus:bg-Mblue-300/50 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-6">
                  <label htmlFor="" className="text-xl lg:text-2xl ">
                    Email
                  </label>
                  <input
                    name="email"
                    placeholder="E.g daniel@gmail.com"
                    type="email"
                    className="outline-none bg-Mblue-200 button-style px-4 py-3 focus:bg-Mblue-300/50 focus:outline-none
"
                  />
                </div>
                <div className="flex flex-col gap-y-6">
                  <label htmlFor="" className="text-2xl ">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Hello i'd like to make an enquiry"
                    type="text"
                    className="outline-none bg-Mblue-200 resize-none button-style px-4 py-3 focus:bg-Mblue-300/50 focus:outline-none"
                  />
                </div>
              </form>
            </div>
            <motion.button
              disabled={isSending || isSent}
              onClick={() =>
                document.getElementById("contactForm").requestSubmit()
              }
              href="javascript:void(0)"
              className={`text-white button-style bg-Mblue-400 z-20 w-full text-2xl md:text-3xl lg:text-4xl text-center py-2 border border-Mblue-400 pointer hover:bg-transparent   ${isSending || isSent ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {isSending ? "Sending..." : isSent ? "Sent ✓" : "Submit"}
            </motion.button>
          </div>
          {/* Contact btns */}
          <div className="flex flex-col items-center  z-20 gap-y-9 lg:gap-y-20">
            <div className="bg-Mblue-300 font-notoserif text-white text-2xl md:text-3xl lg:text-4xl w-full lg:w-[70%] py-2 text-center px-2.5">
              Connect With Me
            </div>
            <div className="bg-Mblue-300 font-notoserif text-white text-xl lg:text-2xl flex flex-col gap-y-3 px-4 py-4 w-full lg:w-[70%]">
              <p>Feel free to reach out or connect with</p>
              <p> me on any of these platforms.</p>
            </div>
            <div className="w-full lg:w-[70%] flex items-center justify-around lg:justify-between">
              {contactIcons.map((icon, i) => {
                const Icon = icon.icon;
                return (
                  <motion.a
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-Mblue-300 py-6 px-4 border border-Mblue-300 pointer hover:bg-transparent hover:text-white hover:opacity-100 opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    key={i}
                  >
                    <Icon className="text-3xl  pointer " />
                  </motion.a>
                );
              })}
            </div>
            <motion.a
              href="https://wa.me/447449034405?text=Hello%20Sultan,%20I%20would%20like%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-Mblue-300 font-notoserif text-white text-2xl text-center px-4 py-4 w-full lg:w-[70%] border border-Mblue-300 pointer hover:bg-transparent "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Message Me
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
