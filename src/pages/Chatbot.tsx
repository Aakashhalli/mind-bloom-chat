import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';

const Chatbot = () => {
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  
  const handleSendMessage = async (message: string): Promise<string> => {
    // If API is connected, send message to API
    if (isApiConnected) {
      try {
        const response = await fetch(`${apiUrl}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: message }),
        });
        
        if (!response.ok) {
          throw new Error('API request failed');
        }
        
        const data = await response.json();
        return data.response;
      } catch (error) {
        console.error('Error sending message to API:', error);
        return "I'm sorry, there was an error processing your request. Please try again later.";
      }
    }
    
    // Otherwise, use hardcoded responses
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return "Hello! I'm MindBloom, a mental health chatbot. How are you feeling today?";
    } else if (lowercaseMessage.includes('how are you')) {
      return "I'm just a chatbot, but I'm here and ready to help you! How can I assist with your mental health questions today?";
    } else if (lowercaseMessage.includes('depression') || lowercaseMessage.includes('depressed')) {
      return "Depression is a common but serious mood disorder. It causes severe symptoms that affect how you feel, think, and handle daily activities. If you're experiencing symptoms of depression, it's important to speak with a mental health professional. Would you like to learn about some coping strategies?";
    } else if (lowercaseMessage.includes('anxiety') || lowercaseMessage.includes('anxious')) {
      return "Anxiety is a normal response to stress, but when it becomes excessive, it can interfere with daily life. Techniques like deep breathing, meditation, and regular exercise can help manage anxiety symptoms. Would you like more information about anxiety management?";
    } else if (lowercaseMessage.includes('stress')) {
      return "Stress is your body's response to challenging situations. While some stress can be motivating, chronic stress can negatively impact your health. Managing stress through relaxation techniques, physical activity, and maintaining social connections is important for mental wellbeing.";
    } else if (lowercaseMessage.includes('help') || lowercaseMessage.includes('crisis')) {
      return "If you're in crisis or need immediate help, please contact a crisis helpline: National Suicide Prevention Lifeline: 988 or 1-800-273-TALK (8255), or text HOME to the Crisis Text Line: 741741. Remember, seeking help is a sign of strength.";
    } else if (lowercaseMessage.includes('test') || lowercaseMessage.includes('dass') || lowercaseMessage.includes('assessment')) {
      return "The DASS-21 (Depression, Anxiety, Stress Scale) is a self-assessment tool that measures depression, anxiety, and stress levels. It's not a diagnostic tool, but it can help you understand your mental health better. Would you like to take the assessment now?";
    } else {
      return "I'm sorry, I don't have specific information about that topic yet. As a mental health chatbot, I can provide general information about common mental health concerns like anxiety, depression, and stress management. Is there something specific you'd like to know about these topics?";
    }
  };
  
  const initialMessages = [
    {
      id: '1',
      text: "Hello! I'm MindBloom, your mental health chatbot. I'm here to answer your questions about mental health topics including depression, anxiety, stress, and self-care. How can I help you today?",
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
            <p className="text-sm text-gray-500">
              Note: This is a demo chatbot using predefined responses. Connect to your Flask API for more advanced interactions.
            </p>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h4 className="font-quicksand font-medium text-md mb-3">Connect to API</h4>
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  className="flex-1 border rounded-md px-3 py-2 text-sm"
                  placeholder="Enter API URL (e.g., http://localhost:5000)"
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                />
                <Button 
                  onClick={() => setIsApiConnected(!isApiConnected)}
                  className={isApiConnected ? "bg-green-500 hover:bg-green-600" : "bg-mental-primary hover:bg-mental-secondary"}
                >
                  {isApiConnected ? "Disconnect" : "Connect"}
                </Button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Status: {isApiConnected ? `Connected to ${apiUrl}` : "Using demo responses"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
