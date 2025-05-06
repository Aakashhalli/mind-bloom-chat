
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionCard from '@/components/QuestionCard';
import { DASS21Result, calculateDASS21Results, dass21Questions, getRecommendations } from '@/utils/assessmentUtils';

enum AssessmentState {
  Introduction,
  Questions,
  Results
}

const Assessment = () => {
  const [state, setState] = useState<AssessmentState>(AssessmentState.Introduction);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<DASS21Result | null>(null);
  const [recommendations, setRecommendations] = useState<any | null>(null);
  const [apiUrl, setApiUrl] = useState('');
  const [isApiConnected, setIsApiConnected] = useState(false);
  
  // Check for saved progress in session storage
  useEffect(() => {
    const savedProgress = sessionStorage.getItem('dass21Progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCurrentQuestion(progress.currentQuestion);
      setAnswers(progress.answers);
      setState(AssessmentState.Questions);
    }
  }, []);
  
  // Save progress to session storage when changes occur
  useEffect(() => {
    if (state === AssessmentState.Questions) {
      sessionStorage.setItem('dass21Progress', JSON.stringify({
        currentQuestion,
        answers
      }));
    }
  }, [currentQuestion, answers, state]);
  
  const startAssessment = () => {
    setState(AssessmentState.Questions);
    setCurrentQuestion(0);
    setAnswers([]);
    setResults(null);
  };
  
  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
    
    if (currentQuestion < dass21Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If all questions are answered, calculate results
      finishAssessment(newAnswers);
    }
  };
  
  const finishAssessment = async (finalAnswers: number[]) => {
    // Clear saved progress
    sessionStorage.removeItem('dass21Progress');
    
    // If API is connected, send answers to API
    if (isApiConnected) {
      try {
        const response = await fetch(`${apiUrl}/dass21`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers: finalAnswers }),
        });
        
        if (!response.ok) {
          throw new Error('API request failed');
        }
        
        const data = await response.json();
        setResults({
          depression: {
            score: 0, // placeholder, API should provide actual scores
            level: data.depression_level,
            description: `Your depression level is ${data.depression_level}`
          },
          anxiety: {
            score: 0,
            level: data.anxiety_level,
            description: `Your anxiety level is ${data.anxiety_level}`
          },
          stress: {
            score: 0,
            level: data.stress_level,
            description: `Your stress level is ${data.stress_level}`
          }
        });
        setRecommendations(data.recommendations);
        setState(AssessmentState.Results);
        return;
      } catch (error) {
        console.error('Error sending answers to API:', error);
        // Fall back to local calculation
      }
    }
    
    // Calculate results locally
    const calculatedResults = calculateDASS21Results(finalAnswers);
    setResults(calculatedResults);
    setRecommendations(getRecommendations(calculatedResults));
    setState(AssessmentState.Results);
  };
  
  const getColorForLevel = (level: string) => {
    switch (level) {
      case "Normal":
        return "bg-green-500";
      case "Mild":
        return "bg-yellow-400";
      case "Moderate":
        return "bg-orange-500";
      case "Severe":
      case "Extremely Severe":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };
  
  const renderLevelBar = (level: string, score: number, maxScore: number = 40) => {
    const percentage = (score / maxScore) * 100;
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{level}</span>
          <span className="text-sm font-medium text-gray-700">{score}</span>
        </div>
        <Progress value={percentage} className="h-3" indicatorClassName={getColorForLevel(level)} />
      </div>
    );
  };
  
  const renderContent = () => {
    switch (state) {
      case AssessmentState.Introduction:
        return (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-quicksand font-semibold mb-4">DASS-21 Assessment</h2>
              <p className="mb-4 text-gray-700">
                The DASS-21 is a set of three self-report scales designed to measure the emotional states of depression, anxiety, and stress.
              </p>
              <p className="mb-4 text-gray-700">
                Each scale contains 7 items, making a total of 21 questions. For each statement, you'll rate how much it applied to you over the past week.
              </p>
              <p className="mb-6 text-gray-700">
                This assessment typically takes about 5-10 minutes to complete.
              </p>
              
              <div className="bg-mental-soft/50 p-4 rounded-lg mb-6">
                <p className="font-medium text-gray-800 mb-2">Important Notes:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>This is not a diagnostic tool.</li>
                  <li>Your responses are private and not stored on our servers.</li>
                  <li>If you're experiencing severe distress, please contact a mental health professional.</li>
                </ul>
              </div>
              
              <Button onClick={startAssessment} className="btn-primary w-full">
                Begin Assessment
              </Button>
            </div>
          </div>
        );
        
      case AssessmentState.Questions:
        return (
          <div className="max-w-2xl mx-auto">
            <QuestionCard
              questionNumber={currentQuestion + 1}
              questionText={dass21Questions[currentQuestion]}
              onAnswer={handleAnswer}
              totalQuestions={dass21Questions.length}
            />
          </div>
        );
        
      case AssessmentState.Results:
        if (!results) return <div>Loading results...</div>;
        
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-quicksand font-semibold mb-6">Your DASS-21 Results</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className={`border-l-4 ${getColorForLevel(results.depression.level)}`}>
                    <CardContent className="p-4">
                      <h3 className="font-quicksand font-medium mb-2">Depression</h3>
                      {renderLevelBar(results.depression.level, results.depression.score)}
                      <p className="mt-3 text-sm text-gray-600">{results.depression.description}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className={`border-l-4 ${getColorForLevel(results.anxiety.level)}`}>
                    <CardContent className="p-4">
                      <h3 className="font-quicksand font-medium mb-2">Anxiety</h3>
                      {renderLevelBar(results.anxiety.level, results.anxiety.score)}
                      <p className="mt-3 text-sm text-gray-600">{results.anxiety.description}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className={`border-l-4 ${getColorForLevel(results.stress.level)}`}>
                    <CardContent className="p-4">
                      <h3 className="font-quicksand font-medium mb-2">Stress</h3>
                      {renderLevelBar(results.stress.level, results.stress.score)}
                      <p className="mt-3 text-sm text-gray-600">{results.stress.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {recommendations && (
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-quicksand font-medium mb-4">
                      Recommendations for {recommendations.primaryConcern}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Recommended Videos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recommendations.resources.videos.map((video: any, index: number) => (
                          <a
                            key={index}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-mental-soft/50 rounded-lg hover:bg-mental-soft transition-colors"
                          >
                            <div className="h-10 w-10 bg-mental-primary/20 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mental-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                            <span className="flex-1 text-gray-700">{video.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Recommended Reading Materials</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recommendations.resources.books.map((book: any, index: number) => (
                          <div key={index} className="p-3 bg-mental-soft/50 rounded-lg">
                            <h5 className="font-medium text-gray-800">{book.title}</h5>
                            <p className="text-sm text-gray-600">by {book.author}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-mental-soft/70 p-6 rounded-lg mb-6">
                      <h4 className="font-medium mb-3">Professional Help</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        {recommendations.resources.professionals.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Disclaimer: This assessment is not a substitute for professional diagnosis. If you're experiencing significant distress, please consult with a qualified healthcare provider.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button onClick={startAssessment} className="btn-secondary">
                    Take Assessment Again
                  </Button>
                  <Link to="/chatbot">
                    <Button className="btn-primary w-full sm:w-auto">
                      Chat About Your Results
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-quicksand font-bold gradient-text mb-2">
            DASS-21 Assessment
          </h1>
          <p className="text-gray-600">
            Measure levels of depression, anxiety, and stress with this self-assessment tool.
          </p>
        </div>
        
        {renderContent()}
        
        {state === AssessmentState.Results && (
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
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
                Status: {isApiConnected ? `Connected to ${apiUrl}` : "Using local calculations"}
              </p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Assessment;
