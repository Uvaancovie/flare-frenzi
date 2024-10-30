// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-yellow-500 p-4 shadow-lg flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-red-500">
        <Image src="/logo2.jpg" alt="PyroDecor Logo" width={40} height={40} className="h-10" />
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
