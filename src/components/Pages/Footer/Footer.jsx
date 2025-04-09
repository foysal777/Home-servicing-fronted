import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-10 px-4 md:px-16 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2 text-gray-200">Product</h3>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Faq’s</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-gray-200">Support</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Features</li>
            <li>Pricing</li>
            <li>Case studies</li>
            <li className="relative">Reviews <span className="absolute -right-4 top-1 w-2 h-2 bg-pink-500 rounded-full"></span></li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-gray-200">For Provider</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Getting started</li>
            <li>Help center</li>
            <li>Server status</li>
            <li>Report a bug</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-gray-200">SignUp For Subscription</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-white rounded mb-2 text-white"
          />
          <button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-2 rounded">
            Subscribes
          </button>
          <div className="mt-4">
            <p className="text-sm font-bold text-gray-200">Download Our App</p>
            <div className="flex space-x-4 mt-2">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732208.png" alt="Google Play" className="w-7" />
              <img src="https://cdn-icons-png.flaticon.com/128/906/906320.png" alt="App Store" className="w-9" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-300 text-sm">
        <p>Copyright © 2025 - All Rights Reserved Clean-Services</p>
        <div className="flex space-x-4 text-xl">
          <FaFacebookF />
          <FaInstagram className="text-pink-400" />
          <FaXTwitter />
          <FaWhatsapp className="text-green-400" />
          <FaYoutube className="text-red-400" />
          <FaLinkedin className="text-blue-400" />
        </div>
        <div className="flex space-x-4">
          <a href="#" className="underline text-gray-200">Terms and Conditions</a>
          <a href="#" className="underline text-gray-200">Privacy</a>
        </div>
      </div>
      <button 
        className="transform transition-transform duration-300 hover:scale-120 fixed bottom-4 right-4 bg-pink-500 text-white px-3 py-2 text-xl rounded-full shadow-lg"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </footer>
  );
}
