
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-10 flex justify-between items-center bg-white/70 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-mental-primary h-8 w-8 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">MB</span>
        </div>
        <h1 className="text-lg md:text-xl font-quicksand font-semibold hidden sm:block gradient-text">
          MindBloom
        </h1>
      </Link>
      
      <div className="flex items-center gap-4">
        <Link to="/" className="hidden md:block text-gray-700 hover:text-mental-primary transition-colors">
          Home
        </Link>
        <Link to="/chatbot" className="hidden md:block text-gray-700 hover:text-mental-primary transition-colors">
          Chatbot
        </Link>
        <Link to="/assessment" className="hidden md:block text-gray-700 hover:text-mental-primary transition-colors">
          DASS-21
        </Link>
        <Link to="/resources" className="hidden md:block text-gray-700 hover:text-mental-primary transition-colors">
          Resources
        </Link>
        <Link to="/chatbot">
          <Button variant="outline" className="hidden md:flex border-mental-primary text-mental-primary hover:bg-mental-soft">
            Start Chat
          </Button>
        </Link>
        <Link to="/assessment">
          <Button className="bg-mental-primary hover:bg-mental-secondary text-white">
            Take Test
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
