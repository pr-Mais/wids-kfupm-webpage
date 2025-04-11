import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-[#161E26] py-8 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo in the middle */}
        <div className="mb-4">
          <Image 
            src="./wids-white.png" 
            alt="WiDS Dhahran Logo"
            width={500}
            height={40}
            className="mx-auto"
          />
        </div>

        {/* Social icons */}
        <div className="flex space-x-6 mb-10">
          <Link 
            href="https://www.facebook.com/kfupm" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link 
            href="https://www.linkedin.com/company/kfupm" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link 
            href="https://x.com/kfupm" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <FaXTwitter size={20} />
          </Link>
        </div>

        {/* Copyright notice */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} WiDS Dhahran @ KFUPM. All rights reserved.
        </p>
      </div>
    </footer>
  );
};