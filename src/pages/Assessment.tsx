import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const questions = [
  {
    id: 1,
    text: "I found myself getting upset by quite trivial things",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 2,
    text: "I was aware of dryness of my mouth",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 3,
    text: "I couldn’t seem to experience any positive feeling at all",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 4,
    text: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 5,
    text: "I found it difficult to work up the initiative to do things",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 6,
    text: "I tended to over-react to situations",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 7,
    text: "I experienced trembling (e.g. in the hands)",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 8,
    text: "I felt that I was using a lot of nervous energy",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 9,
    text: "I was worried about situations in which I might panic and make a fool of myself",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 10,
    text: "I felt that I had nothing to look forward to",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 11,
    text: "I found myself feeling agitated",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 12,
    text: "I found it difficult to relax",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 13,
    text: "I felt down-hearted and blue",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 14,
    text: "I was intolerant of anything that kept me from getting on with what I was doing",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 15,
    text: "I felt I was close to panic",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 16,
    text: "I was unable to become enthusiastic about anything",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 17,
    text: "I felt I wasn’t worth much as a person",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 18,
    text: "I felt that I was rather touchy",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 19,
    text: "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 20,
    text: "I felt scared without any reason",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  },
  {
    id: 21,
    text: "I felt that life was meaningless",
    options: [
      "Did not apply to me at all",
      "Applied to me to some degree, or some of the time",
      "Applied to me a considerable degree, or a good part of time",
      "Applied to me very much, or most of the time"
    ]
  }
];

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateDASS21 = () => {
    const depressionItems = [3, 5, 10, 13, 16, 17, 21];
    const anxietyItems = [2, 4, 7, 9, 15, 19, 20];
    const stressItems = [1, 6, 8, 11, 12, 14, 18];

    const depressionScore = depressionItems.reduce((acc, itemNumber) => {
      const answerIndex = itemNumber - 1;
      return acc + answers[answerIndex];
    }, 0);

    const anxietyScore = anxietyItems.reduce((acc, itemNumber) => {
      const answerIndex = itemNumber - 1;
      return acc + answers[answerIndex];
    }, 0);

    const stressScore = stressItems.reduce((acc, itemNumber) => {
      const answerIndex = itemNumber - 1;
      return acc + answers[answerIndex];
    }, 0);

    return {
      depression: depressionScore * 2,
      anxiety: anxietyScore * 2,
      stress: stressScore * 2,
    };
  };

  const dass21Result = calculateDASS21();

  const interpretScore = (score: number, type: string) => {
    let severity = "";
    if (type === "depression") {
      if (score >= 0 && score <= 9) severity = "Normal";
      else if (score >= 10 && score <= 13) severity = "Mild";
      else if (score >= 14 && score <= 20) severity = "Moderate";
      else if (score >= 21 && score <= 27) severity = "Severe";
      else severity = "Extremely Severe";
    } else if (type === "anxiety") {
      if (score >= 0 && score <= 7) severity = "Normal";
      else if (score >= 8 && score <= 9) severity = "Mild";
      else if (score >= 10 && score <= 14) severity = "Moderate";
      else if (score >= 15 && score <= 19) severity = "Severe";
      else severity = "Extremely Severe";
    } else if (type === "stress") {
      if (score >= 0 && score <= 14) severity = "Normal";
      else if (score >= 15 && score <= 18) severity = "Mild";
      else if (score >= 19 && score <= 25) severity = "Moderate";
      else if (score >= 26 && score <= 33) severity = "Severe";
      else severity = "Extremely Severe";
    }
    return severity;
  };

  const depressionSeverity = interpretScore(dass21Result.depression, "depression");
  const anxietySeverity = interpretScore(dass21Result.anxiety, "anxiety");
  const stressSeverity = interpretScore(dass21Result.stress, "stress");

  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswered = answers[currentQuestionIndex] !== null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-center gradient-text">
            DASS-21 Assessment
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Please read each statement and select the option that indicates how much the statement applied to you
            over the past week.
          </p>

          <Card className="glass-card">
            <CardContent className="p-8">
              <Progress 
                value={currentQuestionIndex / questions.length * 100} 
                className="w-full h-2 bg-gray-200"
              />

              <div className="text-center mt-4">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>

              <div className="mb-6 mt-8">
                <h2 className="text-xl font-quicksand font-medium mb-3">{currentQuestion.text}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={answers[currentQuestionIndex] === index ? "primary" : "outline"}
                      className="w-full"
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                {currentQuestionIndex === questions.length - 1 ? (
                  <AlertDialog>
                    <AlertDialogTrigger asChild disabled={!hasAnswered}>
                      <Button variant={hasAnswered ? "primary" : "secondary"}>
                        {hasAnswered ? "Get Results" : "Get Results"}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          You are about to submit the assessment. Make sure all questions are answered.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => setShowResult(true)}>Confirm</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={!hasAnswered}
                  >
                    Next
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {showResult && (
            <Card className="glass-card mt-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-quicksand font-bold mb-6 text-center">Results</h2>
                <div className="mb-4">
                  <p className="font-medium">Depression: <span className="font-normal">{dass21Result.depression}</span></p>
                  <p className="text-gray-600">Severity: {depressionSeverity}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium">Anxiety: <span className="font-normal">{dass21Result.anxiety}</span></p>
                  <p className="text-gray-600">Severity: {anxietySeverity}</p>
                </div>
                <div>
                  <p className="font-medium">Stress: <span className="font-normal">{dass21Result.stress}</span></p>
                  <p className="text-gray-600">Severity: {stressSeverity}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessment;
