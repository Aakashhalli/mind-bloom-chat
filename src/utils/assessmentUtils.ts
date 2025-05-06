
export interface DASS21Result {
  depression: {
    score: number;
    level: string;
    description: string;
  };
  anxiety: {
    score: number;
    level: string;
    description: string;
  };
  stress: {
    score: number;
    level: string;
    description: string;
  };
}

// DASS-21 questions
export const dass21Questions = [
  // Depression questions (3, 5, 10, 13, 16, 17, 21)
  "I couldn't seem to experience any positive feeling at all",
  "I found it difficult to work up the initiative to do things",
  "I felt that I had nothing to look forward to",
  "I felt down-hearted and blue",
  "I was unable to become enthusiastic about anything",
  "I felt I wasn't worth much as a person",
  "I felt that life was meaningless",

  // Anxiety questions (2, 4, 7, 9, 15, 19, 20)
  "I was aware of dryness of my mouth",
  "I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion)",
  "I experienced trembling (e.g., in the hands)",
  "I was worried about situations in which I might panic and make a fool of myself",
  "I felt I was close to panic",
  "I was aware of the action of my heart in the absence of physical exertion (e.g., sense of heart rate increase, heart missing a beat)",
  "I felt scared without any good reason",

  // Stress questions (1, 6, 8, 11, 12, 14, 18)
  "I found it hard to wind down",
  "I tended to over-react to situations",
  "I felt that I was using a lot of nervous energy",
  "I found myself getting agitated",
  "I found it difficult to relax",
  "I was intolerant of anything that kept me from getting on with what I was doing",
  "I felt that I was rather touchy"
];

// Function to calculate DASS-21 scores
export const calculateDASS21Results = (answers: number[]): DASS21Result => {
  // Depression questions are at indices 0-6
  const depressionScore = answers.slice(0, 7).reduce((sum, score) => sum + score, 0) * 2;
  
  // Anxiety questions are at indices 7-13
  const anxietyScore = answers.slice(7, 14).reduce((sum, score) => sum + score, 0) * 2;
  
  // Stress questions are at indices 14-20
  const stressScore = answers.slice(14, 21).reduce((sum, score) => sum + score, 0) * 2;
  
  // Determine depression level
  let depressionLevel: string;
  let depressionDescription: string;
  
  if (depressionScore <= 9) {
    depressionLevel = "Normal";
    depressionDescription = "Your depression score indicates normal levels.";
  } else if (depressionScore <= 13) {
    depressionLevel = "Mild";
    depressionDescription = "Your depression score indicates mild levels.";
  } else if (depressionScore <= 20) {
    depressionLevel = "Moderate";
    depressionDescription = "Your depression score indicates moderate levels.";
  } else if (depressionScore <= 27) {
    depressionLevel = "Severe";
    depressionDescription = "Your depression score indicates severe levels.";
  } else {
    depressionLevel = "Extremely Severe";
    depressionDescription = "Your depression score indicates extremely severe levels.";
  }
  
  // Determine anxiety level
  let anxietyLevel: string;
  let anxietyDescription: string;
  
  if (anxietyScore <= 7) {
    anxietyLevel = "Normal";
    anxietyDescription = "Your anxiety score indicates normal levels.";
  } else if (anxietyScore <= 9) {
    anxietyLevel = "Mild";
    anxietyDescription = "Your anxiety score indicates mild levels.";
  } else if (anxietyScore <= 14) {
    anxietyLevel = "Moderate";
    anxietyDescription = "Your anxiety score indicates moderate levels.";
  } else if (anxietyScore <= 19) {
    anxietyLevel = "Severe";
    anxietyDescription = "Your anxiety score indicates severe levels.";
  } else {
    anxietyLevel = "Extremely Severe";
    anxietyDescription = "Your anxiety score indicates extremely severe levels.";
  }
  
  // Determine stress level
  let stressLevel: string;
  let stressDescription: string;
  
  if (stressScore <= 14) {
    stressLevel = "Normal";
    stressDescription = "Your stress score indicates normal levels.";
  } else if (stressScore <= 18) {
    stressLevel = "Mild";
    stressDescription = "Your stress score indicates mild levels.";
  } else if (stressScore <= 25) {
    stressLevel = "Moderate";
    stressDescription = "Your stress score indicates moderate levels.";
  } else if (stressScore <= 33) {
    stressLevel = "Severe";
    stressDescription = "Your stress score indicates severe levels.";
  } else {
    stressLevel = "Extremely Severe";
    stressDescription = "Your stress score indicates extremely severe levels.";
  }
  
  return {
    depression: {
      score: depressionScore,
      level: depressionLevel,
      description: depressionDescription
    },
    anxiety: {
      score: anxietyScore,
      level: anxietyLevel,
      description: anxietyDescription
    },
    stress: {
      score: stressScore,
      level: stressLevel,
      description: stressDescription
    }
  };
};

// Function to get recommended resources based on DASS-21 results
export const getRecommendations = (result: DASS21Result) => {
  const highestSeverity = [
    { condition: 'depression', level: result.depression.level, score: levelToNumeric(result.depression.level) },
    { condition: 'anxiety', level: result.anxiety.level, score: levelToNumeric(result.anxiety.level) },
    { condition: 'stress', level: result.stress.level, score: levelToNumeric(result.stress.level) }
  ].sort((a, b) => b.score - a.score)[0];
  
  const resources = {
    videos: [
      {
        title: "Understanding and Managing Stress",
        url: "https://www.youtube.com/watch?v=hnpQrMqDoqE"
      },
      {
        title: "Dealing with Anxiety: Cognitive Behavioral Therapy Techniques",
        url: "https://www.youtube.com/watch?v=g7B3n9jobus"
      },
      {
        title: "Depression: Signs, Symptoms, and Treatment",
        url: "https://www.youtube.com/watch?v=2VRRx7Mtep8"
      }
    ],
    books: [
      {
        title: "The Anxiety and Phobia Workbook",
        author: "Edmund J. Bourne"
      },
      {
        title: "Feeling Good: The New Mood Therapy",
        author: "David D. Burns"
      },
      {
        title: "Why Has Nobody Told Me This Before?",
        author: "Dr. Julie Smith"
      }
    ],
    professionals: [
      "Consider speaking with a mental health professional for personalized guidance.",
      "Many therapists offer online sessions if in-person visits are difficult.",
      "Your primary care physician can provide referrals to mental health specialists."
    ]
  };
  
  return {
    primaryConcern: highestSeverity.condition,
    severity: highestSeverity.level,
    resources
  };
};

// Helper function to convert level to numeric value for comparison
function levelToNumeric(level: string): number {
  switch (level) {
    case "Extremely Severe": return 5;
    case "Severe": return 4;
    case "Moderate": return 3;
    case "Mild": return 2;
    case "Normal": return 1;
    default: return 0;
  }
}
