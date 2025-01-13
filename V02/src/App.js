import React, { useState, useEffect } from 'react';

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "She _____ (go) to the market yesterday.",
      options: ["goes", "gone", "went", "going"],
      correctAnswer: "went"
    },
    {
      question: "The cat is hiding _____ the table.",
      options: ["on", "in", "under", "over"],
      correctAnswer: "under"
    },
    {
      question: "He has _____ (write) the letter already.",
      options: ["wrote", "written", "writes", "writing"],
      correctAnswer: "written"
    },
    {
      question: "The books _____ (be) on the shelf.",
      options: ["is", "are", "was", "were"],
      correctAnswer: "are"
    },
    {
      question: "She runs _____ (fast/fastly) every morning.",
      options: ["fast", "fastly", "quick", "quickly"],
      correctAnswer: "fast"
    },
    {
      question: "I _____ (not see) him for a week.",
      options: ["have not seen", "did not saw", "has not seen", "am not seeing"],
      correctAnswer: "have not seen"
    },
    {
      question: "If I _____ (be) you, I would go to the party.",
      options: ["am", "was", "were", "been"],
      correctAnswer: "were"
    },
    {
      question: "They _____ (play) football when it started to rain.",
      options: ["were playing", "played", "are playing", "had played"],
      correctAnswer: "were playing"
    },
    {
      question: "I have lived here _____ five years.",
      options: ["since", "for", "in", "at"],
      correctAnswer: "for"
    },
    {
      question: "The project will be completed _____ next week.",
      options: ["by", "in", "on", "at"],
      correctAnswer: "by"
    },
    {
      question: "This is the _____ (good) movie I have ever seen.",
      options: ["better", "best", "good", "goodest"],
      correctAnswer: "best"
    },
    {
      question: "She speaks English _____ (good/well).",
      options: ["good", "well", "better", "best"],
      correctAnswer: "well"
    },
    {
      question: "He _____ (drive) to work every day.",
      options: ["drives", "drove", "driving", "drive"],
      correctAnswer: "drives"
    },
    {
      question: "We _____ (finish) the work by the time she arrives.",
      options: ["will finish", "will have finished", "finished", "are finishing"],
      correctAnswer: "will have finished"
    },
    {
      question: "She was born _____ 1990.",
      options: ["in", "on", "at", "by"],
      correctAnswer: "in"
    },
    {
      question: "_____ (Do/Does) she like pizza?",
      options: ["Do", "Does", "Did", "Is"],
      correctAnswer: "Does"
    },
    {
      question: "The food tastes _____ (delicious/deliciously).",
      options: ["delicious", "deliciously", "well", "better"],
      correctAnswer: "delicious"
    },
    {
      question: "He _____ (leave) before I arrived.",
      options: ["leaves", "left", "had left", "is leaving"],
      correctAnswer: "had left"
    },
    {
      question: "I am looking forward _____ (to hear/to hearing) from you.",
      options: ["to hear", "to hearing", "hearing", "to heard"],
      correctAnswer: "to hearing"
    },
    {
      question: "She is _____ (more tall/taller) than her brother.",
      options: ["more tall", "taller", "tall", "tallest"],
      correctAnswer: "taller"
    },
    {
      question: "They are going _____ (on/for/to) a trip next week.",
      options: ["on", "for", "to", "in"],
      correctAnswer: "on"
    },
    {
      question: "Please _____ (bring/take) me a glass of water.",
      options: ["bring", "take", "brought", "took"],
      correctAnswer: "bring"
    },
    {
      question: "She _____ (have/has) a lot of friends.",
      options: ["have", "has", "is having", "had"],
      correctAnswer: "has"
    },
    {
      question: "I _____ (can/may) swim when I was five years old.",
      options: ["can", "could", "may", "might"],
      correctAnswer: "could"
    },
    {
      question: "The house was _____ (build/built) last year.",
      options: ["build", "built", "building", "to build"],
      correctAnswer: "built"
    },
    {
      question: "I _____ (am/was) very tired last night.",
      options: ["am", "was", "is", "will be"],
      correctAnswer: "was"
    },
    {
      question: "_____ (Is/Are) you coming to the party?",
      options: ["Is", "Are", "Will", "Has"],
      correctAnswer: "Are"
    },
    {
      question: "She is _____ (most/mostly) known for her acting skills.",
      options: ["most", "mostly", "much", "more"],
      correctAnswer: "most"
    },
    {
      question: "He _____ (studies/study) English every day.",
      options: ["studies", "study", "studied", "is studying"],
      correctAnswer: "studies"
    },
    {
      question: "I _____ (meet/met) him at the conference last year.",
      options: ["meet", "met", "meeting", "meets"],
      correctAnswer: "met"
    },
    {
      question: "They have _____ (finish/finished) their homework.",
      options: ["finish", "finished", "finishing", "to finish"],
      correctAnswer: "finished"
    },
    {
      question: "He _____ (can/could) speak three languages fluently.",
      options: ["can", "could", "may", "might"],
      correctAnswer: "can"
    },
    {
      question: "She _____ (was/is/are) happy with the results.",
      options: ["was", "is", "are", "will be"],
      correctAnswer: "is"
    },
    {
      question: "I _____ (have/has) been living here since 2010.",
      options: ["have", "has", "had", "am"],
      correctAnswer: "have"
    },
    {
      question: "_____ (Do/Does) they know how to play the piano?",
      options: ["Do", "Does", "Did", "Is"],
      correctAnswer: "Do"
    },
    {
      question: "_____ (He/His) house is located on the corner.",
      options: ["He", "His", "Him", "Himself"],
      correctAnswer: "His"
    }
    
    // Add all other questions here...
  ]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setIsQuizFinished(true);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[questionIndex].correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setIsQuizFinished(false);
    setTimeLeft(300);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Awesome Quiz Application</h1>
        <div className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
          Time Left <span className="bg-gray-800 text-white rounded-full px-2 py-1 ml-1">{timeLeft}</span>
        </div>
      </div>
      {isQuizFinished ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Quiz Finished!</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">{questions[questionIndex].question}</h2>
          <div className="space-y-2">
            {questions[questionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`border ${selectedAnswer === option ? isAnswerCorrect === true ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100' : 'border-blue-300'} rounded-lg p-2 flex justify-between items-center cursor-pointer`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
                {selectedAnswer === option && isAnswerCorrect === true && (
                  <i className="fas fa-check text-green-500"></i>
                )}
                {selectedAnswer === option && isAnswerCorrect === false && (
                  <i className="fas fa-times text-red-500"></i>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600">{questionIndex + 1} of {questions.length} Questions</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleNextQuestion}>Next Question</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
