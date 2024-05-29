import { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Envelop from "../../assets/Icons/envelop-outline.svg";
import Phone from "../../assets/Icons/phone-outline.svg";
import Marker from "../../assets/Icons/marker-outline.svg";
import Iframe from "react-iframe";
import ArrowButton from "../../Components/Buttons/ArrowButton";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); //Navigator
  //Submit Method
   const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, email, phone, message };
        try {
            await axios.post('http://localhost:3000/api/forms', formData);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            navigate("/thank-you", { state: { name } });
        } catch (error) {
            console.error('Something is happening but we dont know! Solve if you can', error);
        }
    };

  return (
    <>
      {/*--------------------------------------- Contact hero section Start --------------------------------*/}
      <section className="services-hero">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5 max-sm:pt-28">
            <div className="content flex flex-col gap-8 max-sm:items-center">
              <Breadcrumbs />
              <h1 className="big-heding leading-tight text-white max-sm:text-center">
                Get in <span className="text-light">touch!</span>
              </h1>
              <p className="text-gray-500  justify-center mb-10 max-sm:mb-5 w-1/3 max-sm:w-full max-sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                voluptas.
              </p>
              <ArrowButton scrollTo="nxt-section" />
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------------- Contact hero section End --------------------------------*/}

      {/*--------------------------------------- Contact section Start --------------------------------*/}
      <section className="bg-white contact-main-section">
        <div
          className="nxt-section content-section py-20 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-row justify-center gap-10 max-sm:flex-col max-sm:py-12 max-sm:px-5 max-lg:flex-col"
          id="nxt-section"
        >
          <div className="content flex flex-col gap-8 justify-center max-sm:items-center w-3/4 pr-10 rounded-3xl max-sm:w-full max-lg:w-full max-sm:mr-0 max-sm:pr-0 mr-16 ">
            <h2 className="font-semibold text-4xl pb-5 text-black">
              Let`s<span className="text-light">Talk</span>
            </h2>
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-7 text-black text-xl w-full mt-5"
            >
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="What's Your Name"
                  onChange={(e) => setName(e.target.value)}
                  className="px-3 py-4 w-full border-gray-300 bg-transparent border-b text-sm uppercase focus:border-primary focus:outline-0"
                />
              </div>
              <div className="flex flex-row gap-5 w-full max-sm:flex-col">
                <div className="mb-4 w-full">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Your Mail"
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3 py-4 border-gray-300 bg-transparent border-b text-sm uppercase w-full focus:border-primary focus:outline-0"
                  />
                </div>
                <div className="mb-4 w-full">
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    placeholder="Your Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    className="px-3 py-4 border-gray-300 bg-transparent border-b text-sm uppercase w-full focus:border-primary focus:outline-0"
                  />
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  id="message"
                  value={message}
                  placeholder="Tell About Your Project"
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-3 py-4 w-full border-gray-300 bg-transparent border-b text-sm uppercase focus:border-primary focus:outline-0"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="contact-button pl-7 pr-4 py-3 rounded-full text-white"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </button>
            </form>
          </div>
          <div className="content flex flex-col gap-8 max-sm:items-center w-3/12 max-sm:w-full max-lg:w-full">
            <a
              href="mailto:example@vista.com"
              className="content flex flex-col gap-3 items-center w-full bg-white shadow-xl border p-8 max-sm:p-8 rounded-3xl transition-all hover:-translate-y-3 hover:duration-300"
            >
              <img
                src={Envelop}
                className="h-10 service-card-icon self-center"
              />
              <h3>Email</h3>
              <p>example@vista.com</p>
            </a>
            <a
              href="tel:+91 9724034277"
              className="content flex flex-col gap-3 items-center w-full bg-white shadow-xl border p-8 max-sm:p-8 rounded-3xl transition-all hover:-translate-y-3 hover:duration-300"
            >
              <img src={Phone} className="h-10 service-card-icon self-center" />
              <h3>Phone</h3>
              <p>+91 9725059703</p>
            </a>
            <a
              href="#map-section"
              className="content flex flex-col gap-3 items-center w-full bg-white shadow-xl border p-8 max-sm:p-8 rounded-3xl transition-all hover:-translate-y-3 hover:duration-300"
            >
              <img
                src={Marker}
                className="h-10  service-card-icon self-center"
              />
              <h3>Address</h3>
              <p className="text-center">Lorem ipsum is dummy text, 007</p>
            </a>
          </div>
        </div>

        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.54646750331!2d-0.12209412309022351!3d51.50318971101055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1715881245440!5m2!1sen!2sin"
          height="420px"
          id=""
          className=""
          position="relative"
        />
      </section>

      {/*--------------------------------------- Contact section End --------------------------------*/}
    </>
  );
};

export default Contact;