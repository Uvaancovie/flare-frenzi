// components/Footer.tsx

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="border-t border-gray-700"> {/* Grey line above the footer */}
      <footer className="bg-black text-yellow-500 py-12">
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
            
            {/* Column: Flare Frenzi Location Info */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Flare Frenzi</h3>
              <p className="text-gray-400 mb-4">
                <strong>Telephone:</strong> 071 880 1007
              </p>
              <p className="text-gray-400 mb-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:flarefrenzi@gmail.com" className="text-red-500 hover:text-red-600">
                  flarefrenzi@gmail.com
                </a>
              </p>
              <p className="text-gray-400 mb-4">
                <strong>Address:</strong> 2 Kruger Place, Phoenix Industrial Park
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaFacebookF size={24} />
              </a>
              
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} Flare Frenzi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
