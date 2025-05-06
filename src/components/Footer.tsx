
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-mental-primary h-8 w-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MB</span>
              </div>
              <h3 className="text-xl font-quicksand font-semibold gradient-text">MindBloom</h3>
            </div>
            <p className="text-gray-500 max-w-xs">
              Your mental health matters. Ask questions, reflect, and heal with our supportive tools.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-quicksand font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Chatbot
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-gray-500 hover:text-mental-primary transition-colors">
                  DASS-21 Assessment
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-quicksand font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Mental Health Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Video Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Reading Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Professional Help
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-quicksand font-medium text-lg mb-4">Contact & Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  Crisis Helplines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MindBloom. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-mental-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>This is not a substitute for professional mental health care. If you're in crisis, please contact emergency services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
