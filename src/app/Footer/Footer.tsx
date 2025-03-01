import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-8">
          {/* About Us */}
          <div>
            <div className="text-2xl font-bold">
              Shop<span className="text-teal-500">Ease</span>
            </div>
            <p className="text-sm mt-6">
              We are an online clothing store offering a wide variety of stylish
              and affordable T-shirts and apparel.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ibrahim Khalilullah. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
