
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';

const Chatbot = () => {
  const { toast } = useToast();
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  
  const handleSendMessage = async (message: string): Promise<string> => {
    try {
      // Send message to Flask backend API
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      });
      
      if (!response.ok) {
        throw new Error('Backend API request failed');
      }
      
      const data = await response.json();
      setIsBackendConnected(true);
      return data.response;
    } catch (error) {
      console.error('Error sending message to backend API:', error);
      setIsBackendConnected(false);
      toast({
        title: "Cannot connect to backend",
        description: "Please ensure the Flask backend server is running",
        variant: "destructive",
      });
      return "I'm unable to process your request at the moment. Please check if the backend server is running.";
    }
  };
  
  const initialMessages = [
    {
      id: '1',
      text: "Hello! I'm MindBloom, your mental health chatbot. I'm here to answer your questions about mental health topics including depression, anxiety, stress, and self-care. How can I help you today?",
      sender: 'bot' as const,
      timestamp: new Date(),
    },
    {
      id: '2',
      text: "Please note that I require a connection to the Flask backend to function. Make sure the backend server is running before asking questions.",
      sender: 'bot' as const,
      timestamp: new Date(),
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-quicksand font-bold gradient-text mb-2">
                MindBloom Chatbot
              </h1>
              <p className="text-gray-600">
                Ask questions about mental health, coping strategies, or resources.
              </p>
            </div>
            
            <Link to="/assessment">
              <Button variant="outline" className="border-mental-primary text-mental-primary hover:bg-mental-soft">
                Take DASS-21 Test
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px] mb-6">
            <ChatInterface initialMessages={initialMessages} onSendMessage={handleSendMessage} />
          </div>
          
          <div className="bg-mental-soft/50 rounded-lg p-6">
            <h3 className="font-quicksand font-medium text-lg mb-3">About This Chatbot</h3>
            <p className="text-gray-700 mb-4">
              This chatbot provides information and resources about mental health topics. While it can offer general guidance, 
              it's not a substitute for professional help. If you're experiencing a mental health crisis or need immediate 
              assistance, please contact a mental health professional or crisis helpline.
            </p>
            
            <div className="mt-4 flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isBackendConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <p className="text-sm text-gray-500">
                Backend status: {isBackendConnected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
            
            {!isBackendConnected && (
              <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
                <p className="text-sm text-amber-800">
                  The backend Flask server doesn't appear to be running. Make sure the server is started 
                  and try sending a message again.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
