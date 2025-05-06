
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDModel from '@/components/ThreeDModel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold mb-6 gradient-text leading-tight">
              Mental Health Chatbot for FAQ and Detection using DASS-21
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Ask. Reflect. Heal. Your Mental Health Matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chatbot">
                <Button className="btn-primary">Start Chatbot</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" className="btn-secondary">Take DASS-21 Test</Button>
              </Link>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-[500px] relative">
            <div className="absolute inset-0 breathing-element">
              <ThreeDModel />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mental Health Importance Section */}
      <section className="py-16 md:py-24 bg-mental-soft/30 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-12 text-center gradient-text">
            Why Mental Health Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card card-hover">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-mental-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mental-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-quicksand font-medium mb-3 text-center">Physical Well-being</h3>
                <p className="text-gray-600 text-center">
                  Mental health directly impacts physical health through stress response, immune function, and health behaviors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card card-hover">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-mental-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mental-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-quicksand font-medium mb-3 text-center">Emotional Balance</h3>
                <p className="text-gray-600 text-center">
                  Good mental health helps manage emotions, cope with life's challenges, and maintain healthy relationships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card card-hover">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-mental-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mental-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-quicksand font-medium mb-3 text-center">Quality of Life</h3>
                <p className="text-gray-600 text-center">
                  Mental wellness enhances overall quality of life, productivity, and ability to contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Articles Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-12 text-center gradient-text">
            Educational Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Depression",
                excerpt: "Learn about the symptoms, causes, and treatments for depression.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Anxiety Management Techniques",
                excerpt: "Discover effective strategies to manage anxiety in daily life.",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "The Impact of Stress",
                excerpt: "Explore how stress affects your mind and body, and ways to reduce it.",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600"
              }
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden shadow-lg card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-quicksand font-medium mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a href="#" className="text-mental-primary font-medium hover:underline">Read more</a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="btn-secondary">View All Articles</Button>
          </div>
        </div>
      </section>
      
      {/* Quotes Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-mental-primary/5 to-mental-soft/50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-12 text-center gradient-text">
            Inspirational Quotes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
                author: "Noam Shpancer"
              },
              {
                quote: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn't make you a negative person. It makes you human.",
                author: "Lori Deschene"
              },
              {
                quote: "Mental health problems don't define who you are. They are something you experience, but you walk in your own shoes.",
                author: "Matt Haig"
              },
              {
                quote: "Self-care is how you take your power back.",
                author: "Lalah Delia"
              }
            ].map((quote, index) => (
              <Card key={index} className="glass-card p-6 md:p-8 card-hover">
                <CardContent className="p-0">
                  <svg
                    className="h-10 w-10 text-mental-primary/30 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.849h4v10h-10z" />
                  </svg>
                  <p className="text-gray-700 text-lg mb-4">{quote.quote}</p>
                  <p className="text-right text-mental-primary font-medium">— {quote.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mental-primary/10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 gradient-text">
            Ready to Prioritize Your Mental Health?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Start a conversation with our chatbot or take the DASS-21 assessment to understand your mental wellbeing better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot">
              <Button className="btn-primary">Start Chatbot</Button>
            </Link>
            <Link to="/assessment">
              <Button variant="outline" className="btn-secondary">Take DASS-21 Test</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
