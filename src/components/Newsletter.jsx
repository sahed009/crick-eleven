import backgroundImage from '../assets/bg-shadow.png';

const Newsletter = () => {
  return (
    <div className="relative -mt-52 w-5/6 md:max-w-8xl mx-auto z-10">
      
      <div className="p-6 bg-white/10 backdrop-blur border rounded-2xl shadow-lg">
        <div
          className="bg-white flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 lg:py-20 rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2 className="text-xl text-center sm:text-3xl font-bold mb-2 text-gray-900">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-700 text-sm sm:text-base my-4 text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg focus:outline-none border border-gray-300"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-medium rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
