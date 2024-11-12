import backgroundImage from '../assets/bg-shadow.png';
import logoImage from '../assets/banner-main.png';

const Banner = ({ onClaimCredit }) => (
  <section
    className="relative my-10 p-4 sm:p-6 md:p-8 text-center w-11/12 md:w-full  mx-auto rounded-3xl overflow-hidden"
    style={{
      backgroundImage: `url(${backgroundImage}), linear-gradient(to right, #3b82f6, #000, #ec4899)`,
      backgroundBlendMode: "overlay",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40"></div>

    <div className="relative z-10 flex flex-col justify-center items-center h-full">
      <img
        src={logoImage}
        alt="Cricket Logo"
        className="mx-auto mb-2 w-1/2 md:w-1/5" />

      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4">
        Beyond Boundaries Beyond Limits
      </p>

      <div className="inline-block p-1 rounded-full border border-yellow-400 bg-transparent hover:bg-yellow-500 duration-300 ease-in-out">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 duration-300 ease-in-out text-black font-semibold py-2 px-4 sm:px-6 rounded-full"
          onClick={onClaimCredit}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  </section>
);

export default Banner;
