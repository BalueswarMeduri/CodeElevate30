import React from 'react';
import { Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-amber-400" />
              <div>
                <h2 className="font-bold text-xl">Golden Opportunities</h2>
                <p className="text-xs text-gray-400">Elevating coding skills</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Join our 30-day CodeElevate challenge to master data structures and algorithms.
              Build your problem-solving skills with daily challenges on various DSA topics.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Github size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Mail size={20} />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#challenges">Challenges</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">DSA Guide</FooterLink>
              <FooterLink href="#">Interview Prep</FooterLink>
              <FooterLink href="#">Coding Tips</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Golden Opportunities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-400 hover:text-amber-400 transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a 
      href="#"
      className="bg-gray-800 hover:bg-amber-500 text-white p-2 rounded-full transition-colors"
    >
      {icon}
    </a>
  );
};