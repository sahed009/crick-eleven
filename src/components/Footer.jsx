import Newsletter from './Newsletter';
import flogo from '../assets/logo-footer.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24">

      <Newsletter />

      <div className="container mx-auto px-4 pt-20 pb-8">

        <div className='flex items-center justify-center mb-20'>
          <img src={flogo} alt="max-w-full h-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400 max-w-xs">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 flex flex-col gap-4">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-xl focus:outline-none border border-gray-300"
              />
              <button className="px-4 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium rounded-r-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
          &copy; 2024 Crick XI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
