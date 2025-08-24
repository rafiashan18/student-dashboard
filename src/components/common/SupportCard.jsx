import mascot from '../../assets/images/mascot.png';
import { useMascotAnimation } from '../../hooks/useFloatingAnimations';

const SupportCard = () => {
  const { mascotRef } = useMascotAnimation();

  return (
    <div className="bg-white bg-card-gradient p-2 rounded-xl text-default  shadow-md">
      <div className=" gap-2 p-2 bg-card-minimal  rounded-xl flex flex-col items-center text-center">
        <img 
          ref={mascotRef}
          src={mascot} 
          alt="Mascot" 
          className="h-20 w-20" 
        />
        <p className="text-sm w-44 font-bold  ">
          Need help? Just start a chat with us.
        </p>
        <button className="px-9 py-2 text-sm font-medium rounded-lg bg-btn text-btn duration-300 hover:bg-indigo-600">
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default SupportCard;