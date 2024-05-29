
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import Tyimg from "../assets/Images/Thank-You-Illustration.png";
import { useLocation } from 'react-router-dom';


function ThankYou() {
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col items-center gap-5 px-5">
        <img
          className="w-1/3 h-auto max-sm:w-2/3"
          src={Tyimg}
          alt="Error 404"
        />
        <div className="flex w-3/6 flex-col items-center max-sm:w-full">
        <span className='text-primary text-4xl mb-4'>{name}</span> 
        <h1 className="text-white text-4xl text-center max-sm:text-3xl" >
        Thank You for Reaching Out!
        </h1>
        </div>
        <p className="text-gray-500 text-center pb-5 w-1/3 max-sm:w-full">
        We appreciate you taking the time to contact us. Your message has been successfully received
        </p>
        <PrimaryButton btnHref="/" btnText="Return To Home" />
      </div>
    </div>
  )
}

export default ThankYou
