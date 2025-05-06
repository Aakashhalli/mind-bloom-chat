
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-quicksand font-bold gradient-text mb-4">
            Mental Health Resources
          </h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Explore these curated resources for better understanding and managing mental health. 
            Remember that these resources are not a substitute for professional help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-quicksand font-medium mb-4">Crisis Resources</h2>
                <ul className="space-y-3">
                  <li>
                    <h3 className="font-medium">National Suicide Prevention Lifeline</h3>
                    <p className="text-sm text-gray-600">24/7, free and confidential support</p>
                    <p className="text-mental-primary mt-1">988 or 1-800-273-8255</p>
                  </li>
                  <li>
                    <h3 className="font-medium">Crisis Text Line</h3>
                    <p className="text-sm text-gray-600">24/7 text support with a crisis counselor</p>
                    <p className="text-mental-primary mt-1">Text HOME to 741741</p>
                  </li>
                  <li>
                    <h3 className="font-medium">SAMHSA National Helpline</h3>
                    <p className="text-sm text-gray-600">Treatment referral and information service</p>
                    <p className="text-mental-primary mt-1">1-800-662-4357</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-quicksand font-medium mb-4">Educational Resources</h2>
                <ul className="space-y-3">
                  <li>
                    <h3 className="font-medium">National Institute of Mental Health</h3>
                    <p className="text-sm text-gray-600">Research and information on mental disorders</p>
                    <a href="https://www.nimh.nih.gov" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline mt-1 block">www.nimh.nih.gov</a>
                  </li>
                  <li>
                    <h3 className="font-medium">Mental Health America</h3>
                    <p className="text-sm text-gray-600">Mental health resources, tools, and screening</p>
                    <a href="https://www.mhanational.org" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline mt-1 block">www.mhanational.org</a>
                  </li>
                  <li>
                    <h3 className="font-medium">American Psychological Association</h3>
                    <p className="text-sm text-gray-600">Psychological research and resources</p>
                    <a href="https://www.apa.org" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline mt-1 block">www.apa.org</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-quicksand font-medium mb-4">Self-Help Resources</h2>
                <ul className="space-y-3">
                  <li>
                    <h3 className="font-medium">Headspace</h3>
                    <p className="text-sm text-gray-600">Meditation and mindfulness app</p>
                    <a href="https://www.headspace.com" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline mt-1 block">www.headspace.com</a>
                  </li>
                  <li>
                    <h3 className="font-medium">Calm</h3>
                    <p className="text-sm text-gray-600">Sleep, meditation, and relaxation app</p>
                    <a href="https://www.calm.com" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline mt-1 block">www.calm.com</a>
                  </li>
                  <li>
                    <h3 className="font-medium">7 Cups</h3>
                    <p className="text-sm text-gray-600">Online therapy and free support</p>
                    <a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline mt-1 block">www.7cups.com</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-quicksand font-semibold mb-6 gradient-text">Recommended Reading</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "The Body Keeps the Score",
                author: "Bessel van der Kolk",
                description: "Explores the effects of trauma on the body and mind.",
                cover: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=400"
              },
              {
                title: "Feeling Good",
                author: "David D. Burns",
                description: "A guide to cognitive behavioral therapy techniques.",
                cover: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400"
              },
              {
                title: "Lost Connections",
                author: "Johann Hari",
                description: "New insights on depression and anxiety and their causes.",
                cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400"
              },
              {
                title: "Why Has Nobody Told Me This Before?",
                author: "Dr. Julie Smith",
                description: "Everyday tools for managing life's ups and downs.",
                cover: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=400"
              },
            ].map((book, index) => (
              <Card key={index} className="overflow-hidden shadow-md card-hover">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-quicksand font-medium">{book.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                  <p className="text-sm text-gray-600">{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-quicksand font-semibold mb-6 gradient-text">Video Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <svg className="w-16 h-16 mx-auto text-mental-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="mt-2">Video Placeholder: Mental Health Basics</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-quicksand font-medium">Understanding Mental Health</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A comprehensive introduction to mental health concepts and how they affect everyday life.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <svg className="w-16 h-16 mx-auto text-mental-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="mt-2">Video Placeholder: Coping Strategies</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-quicksand font-medium">Healthy Coping Mechanisms</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Learn practical strategies to cope with stress, anxiety, and difficult emotions in healthy ways.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-mental-soft/50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-quicksand font-semibold mb-4">Finding Professional Help</h2>
            <p className="text-gray-700 mb-6">
              Working with mental health professionals can provide personalized support and treatment options. 
              Here are resources to help you find professional mental health care:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">How to Find a Therapist</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Check with your insurance provider for coverage</li>
                  <li>Ask your primary care doctor for referrals</li>
                  <li>Use online therapist directories</li>
                  <li>Consider telehealth options if in-person isn't available</li>
                  <li>Many workplaces offer Employee Assistance Programs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Online Directories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline">Psychology Today Therapist Directory</a>
                  </li>
                  <li>
                    <a href="https://www.goodtherapy.org/find-therapist.html" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline">GoodTherapy</a>
                  </li>
                  <li>
                    <a href="https://www.therapyforblackgirls.com" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline">Therapy for Black Girls</a>
                  </li>
                  <li>
                    <a href="https://www.inclusivetherapists.com" target="_blank" rel="noopener noreferrer" className="text-mental-primary hover:underline">Inclusive Therapists</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Disclaimer</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    The resources provided here are for informational purposes only and do not constitute medical advice, diagnosis, or treatment. 
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
