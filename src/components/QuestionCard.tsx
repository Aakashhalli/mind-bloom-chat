
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
  onAnswer: (score: number) => void;
  totalQuestions: number;
}

const QuestionCard = ({ questionNumber, questionText, onAnswer, totalQuestions }: QuestionCardProps) => {
  const options = [
    { value: 0, label: "Did not apply to me at all" },
    { value: 1, label: "Applied to me to some degree" },
    { value: 2, label: "Applied to me to a considerable degree" },
    { value: 3, label: "Applied to me very much" },
  ];
  
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md overflow-hidden p-6 animate-fade-in">
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-mental-primary transition-all" 
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Question {questionNumber} of {totalQuestions}</p>
      </div>
      
      <h3 className="text-xl font-quicksand font-medium mb-6 text-gray-800">{questionText}</h3>
      
      <div className="space-y-3">
        {options.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            className="w-full justify-start p-4 h-auto border border-gray-200 hover:border-mental-primary hover:bg-mental-soft/20 transition-colors"
            onClick={() => onAnswer(option.value)}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                {option.value}
              </div>
              <span>{option.label}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
