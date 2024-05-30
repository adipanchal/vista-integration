import Breadcrumbs from "../../Components/Breadcrumbs";
import ArrowButton from "../../Components/Buttons/ArrowButton";
import Cta from "../../Components/Cta";
import AboutImg from  "../../assets/Images/About.jpg";
import Member1 from './Team/vajib-shaikh.jpg';
import Member2 from './Team/dipesh-nyka.jpg';
import Member3 from './Team/aditya-panchal.jpg';


const About = () => {
  return (
    <>
      {/* About Us Page Hero Section Start  */}
      <div className="about-hero-section">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5 max-sm:pt-28">
            <div className="content flex flex-col gap-8 max-sm:items-center">
              <Breadcrumbs />
              <h1 className="big-heding leading-tight text-white max-sm:text-center">
                About <span className="text-light"> Us</span>
              </h1>
              <p className="text-gray-500  justify-center mb-10 max-sm:mb-5 w-1/3 max-sm:w-full max-sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                voluptas.
              </p>
              <ArrowButton scrollTo="nxt-section" />
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------- About section Start --------------------------------*/}
      <div
        className="about-section section flex max-w-screen-xl m-auto py-28 gap-12 max-sm:flex-col-reverse max-sm:py-14 bg-white"
        id="nxt-section"
      >
        {/* left side content section  */}
        <div className="content-section w-1/2 pr-20 max-sm:w-full max-sm:pr-0">
          <h2 className="leading-tight text-black big-heading">
            <span className="text-light">The Story of </span>Vista
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            voluptate.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            eum corporis porro consectetur quaerat eius labore officiis placeat
            beatae sequi voluptas, aperiam quas! Fuga, aliquam!
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            eum corporis porro consectetur quaerat eius labore officiis placeat
            beatae sequi voluptas, aperiam quas! Fuga, aliquam!
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            eum corporis porro consectetur quaerat eius labore officiis placeat
            beatae sequi voluptas, aperiam quas! Fuga, aliquam!
          </p>
          <div className="flex mt-8  gap-5 max-sm:flex-col-reverse max-sm:justify-center max-sm:mt-6"></div>
        </div>
        {/* right Side Image section */}
        <div className="image-section w-1/2 max-sm:w-full">
          <img
              src={AboutImg}
              alt="CodeIsFun"
            className="about-img rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      {/*--------------------------------------- About section End --------------------------------*/}
      {/*--------------------------------------- Grid section Start --------------------------------*/}

      <div className="why-choose-section">
        <div className="bg-black flex ">
          <div className="content-section py-32 px-5 max-w-screen-xl mx-auto content-end flex flex-col gap-6 flex-nowrap justify-center max-sm:py-12 max-sm:px-5">
            <div className="content flex flex-col gap-8">
              <h2 className="text-white text-5xl text-center max-sm:text-4xl big-heading">
                Our Projects
              </h2>
              <p className="text-gray-500  justify-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-16 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div className="border border-slate-700 rounded-xl py-14 px-5 text-white hover:shadow-xl hover:shadow-slate-900 hover:-translate-y-5 max-sm:hover:hover:-translate-y-3 transition-all duration-300">
                  <h3 className="mb-5">Project 1</h3>
                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quam inventore quis ullam.
                  </p>
                </div>
                <div className="border border-slate-700 rounded-xl py-14 px-5 text-white hover:shadow-xl hover:shadow-slate-900 hover:-translate-y-5 max-sm:hover:hover:-translate-y-3 transition-all duration-300">
                  <h3 className="mb-5">Project 2</h3>
                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quam inventore quis ullam.
                  </p>
                </div>
                <div className="border border-slate-700 rounded-xl py-14 px-5 text-white hover:shadow-xl hover:shadow-slate-900 hover:-translate-y-5 max-sm:hover:hover:-translate-y-3 transition-all duration-300">
                  <h3 className="mb-5">Project 3</h3>
                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quam inventore quis ullam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------- Grid section End --------------------------------*/}

      {/*--------------------------------------- Team section Start --------------------------------*/}
      <section className="our-team" id="nxt-section">
        <div className="max-w-screen-xl section m-auto pt-20 py-64  max-sm:pt-10 max-sm:pb-60">
          <h2 className="text-black text-5xl text-center max-sm:text-4xl big-heading mb-5 max-sm:mb-4">
            Our Team
          </h2>
          <p className="text-gray-500 text-center  justify-center mb-10 max-sm:mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 w-3/4 max-sm:w-3/4 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
              {/* Member 1 */}
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary shadow-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={Member1}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">
                  Vajib Shaikh
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  Lead Developer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://github.com/ShaikhVajib"
                    className="mx-2 text-gray-600  hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Member 2 */}
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary shadow-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={Member2}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">
                  Dipesh Nayka
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  Developer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://github.com/Dip3478"
                    className="mx-2 text-gray-600  hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              {/* Member 3 */}
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border shadow-xl cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={Member3}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">
                  Aditya Panchal
                </h1>

                <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">
                  Developer
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://github.com/adipanchal/"
                    className="mx-2 text-gray-600  hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      {/*--------------------------------------- Team section End --------------------------------*/}
      {/*--------------------------------------- Cta Section Start --------------------------------*/}
      <div className="cta-section">
        <Cta />
      </div>
      {/*--------------------------------------- Cta Section End --------------------------------*/}
    </>
  );
};

export default About;
