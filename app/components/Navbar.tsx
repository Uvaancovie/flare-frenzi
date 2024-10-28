// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-yellow-500 p-4 shadow-lg flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-red-500">
        <Link href="/" className="text-red-500">
          <img src="/logo2.jpg" alt="PyroDecor Logo" className="h-10" />
        </Link>
      </div>

      {/* Links Section */}
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-red-500 transition-colors duration-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-red-500 transition-colors duration-200">
          About
        </Link>
        <Link href="/services" className="hover:text-red-500 transition-colors duration-200">
          Services
        </Link>
        <Link href="/contact" className="hover:text-red-500 transition-colors duration-200">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
