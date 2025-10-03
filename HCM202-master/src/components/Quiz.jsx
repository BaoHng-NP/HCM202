import React, { useState, useEffect } from "react";
import { Card, Button, Radio, Alert } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Shuffle options when question changes
  useEffect(() => {
    if (currentQuestion) {
      const optionsWithIndex = currentQuestion.options.map((option, index) => ({
        text: option,
        originalIndex: index,
      }));

      const shuffled = [...optionsWithIndex];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      setShuffledOptions(shuffled);
    }
  }, [currentQuestionIndex, currentQuestion]);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const selectedOption = shuffledOptions[selectedAnswer];
    const correct =
      selectedOption.originalIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setAnsweredQuestions((prev) => prev + 1);
    if (correct) {
      setScore((prev) => prev + 1);
    }

    // Check if this is the last question
    if (currentQuestionIndex === questions.length - 1 && !quizCompleted) {
      setQuizCompleted(true);
      // Call onComplete callback after a short delay
      setTimeout(() => {
        if (onComplete) {
          onComplete(correct ? score + 1 : score, questions.length);
        }
      }, 500);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsCorrect(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    setScore(0);
    setAnsweredQuestions(0);
    setQuizCompleted(false);
  };

  return (
    <Card
      className="content-card bg-gradient-to-br from-accent/5 to-primary/5"
      bodyStyle={{ padding: window.innerWidth < 640 ? "16px" : "24px" }}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🧠</span>
        <h3 className="text-lg sm:text-xl font-semibold text-primary">
          Kiểm tra kiến thức
        </h3>
      </div>

      {/* Progress indicator */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            Câu {currentQuestionIndex + 1} / {questions.length}
          </span>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            Điểm: {score} / {answeredQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <h4 className="font-medium text-sm sm:text-base text-gray-800 mb-3 sm:mb-4 leading-relaxed">
          {currentQuestion.question}
        </h4>

        <Radio.Group
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
          disabled={showResult}
          className="w-full"
        >
          <div className="space-y-2 sm:space-y-3">
            {shuffledOptions.map((option, index) => {
              const isCorrectAnswer =
                option.originalIndex === currentQuestion.correctAnswer;
              const isSelectedAnswer = selectedAnswer === index;

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Radio
                    value={index}
                    className={`w-full p-2 sm:p-3 rounded-lg border transition-all duration-300 ${
                      showResult
                        ? isCorrectAnswer
                          ? "bg-green-50 border-green-300"
                          : isSelectedAnswer && !isCorrect
                          ? "bg-red-50 border-red-300"
                          : "bg-gray-50 border-gray-200"
                        : isSelectedAnswer
                        ? "bg-primary/10 border-primary"
                        : "bg-white border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    <span
                      className={`ml-2 text-xs sm:text-sm ${
                        showResult && isCorrectAnswer
                          ? "text-green-700 font-medium"
                          : showResult && isSelectedAnswer && !isCorrect
                          ? "text-red-700"
                          : "text-gray-700"
                      }`}
                    >
                      {option.text}
                    </span>
                    {showResult && isCorrectAnswer && (
                      <CheckCircleOutlined className="text-green-600 ml-2" />
                    )}
                    {showResult && isSelectedAnswer && !isCorrect && (
                      <CloseCircleOutlined className="text-red-600 ml-2" />
                    )}
                  </Radio>
                </motion.div>
              );
            })}
          </div>
        </Radio.Group>
      </div>

      <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
        {!showResult ? (
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="bg-primary hover:bg-red-700 text-xs sm:text-sm"
            size={window.innerWidth < 640 ? "middle" : "large"}
          >
            Kiểm tra đáp án
          </Button>
        ) : (
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {currentQuestionIndex < questions.length - 1 && (
              <Button
                type="primary"
                onClick={handleNext}
                className="bg-primary hover:bg-red-700 text-xs sm:text-sm"
                size={window.innerWidth < 640 ? "middle" : "large"}
              >
                Câu tiếp theo
              </Button>
            )}
            <Button
              onClick={handleReset}
              className="border-primary text-primary hover:bg-primary hover:text-white text-xs sm:text-sm"
              size={window.innerWidth < 640 ? "middle" : "large"}
            >
              Làm lại từ đầu
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Alert
              message={
                <span className="text-xs sm:text-sm font-medium">
                  {isCorrect ? "Chính xác! 🎉" : "Chưa đúng! 🤔"}
                </span>
              }
              description={
                <span className="text-xs sm:text-sm">
                  {currentQuestion.explanation}
                </span>
              }
              type={isCorrect ? "success" : "error"}
              showIcon
              className="rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default Quiz;
