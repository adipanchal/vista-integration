import "./Services.css";
import ServicesComponent from "../../Components/Services/ServicesComponent";
import Cta from "../../Components/Cta";
import Breadcrumbs from "../../Components/Breadcrumbs";
import ArrowButton from "../../Components/Buttons/ArrowButton";


const Services = () => {

  return (
    <>
      {/*--------------------------------------- Services hero section Start --------------------------------*/}

      <section className="services-hero">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5 max-sm:pt-28">
            <div className="content flex flex-col gap-8 max-sm:items-center">
              <Breadcrumbs />
              <h1 className="big-heding leading-tight text-white max-sm:text-center">
                Our <span className="text-light"> Services</span>
              </h1>
              <p className="text-gray-500  justify-center mb-10 max-sm:mb-5 w-1/3 lg:w-2/6 max-sm:w-full max-sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas. 
          </p>
          <ArrowButton scrollTo="nxt-section" />



            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------------- Services hero section End --------------------------------*/}

      {/*--------------------------------------- Services section Start --------------------------------*/}
      <section className="services-grid" id="nxt-section">
        <div className="max-w-screen-xl section m-auto pt-20 py-64  max-sm:pt-10 max-sm:pb-60">
          <h2 className="text-black text-5xl  max-sm:text-4xl big-heading mb-5 max-sm:mb-4">
          What We Offer
          </h2>
          <p className="text-gray-500  justify-center mb-10 max-sm:mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ServicesComponent />
        </div>
      </section>
      {/*--------------------------------------- Services section End --------------------------------*/}
      {/*--------------------------------------- Cta Section Start --------------------------------*/}
      <div className="cta-section">
        <Cta />
      </div>
      {/*--------------------------------------- Cta Section End --------------------------------*/}
    </>
  );
};

export default Services;
