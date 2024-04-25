import React, { useState, useEffect } from 'react';
import "./testStyle.css";
import logo from '../../../Assets/logo.png'

const CreativityQues = () => {
  const [creativityQuestions, setCreativityQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch questions from the backend
    fetchCreativityQuestions();
  }, []);

  const fetchCreativityQuestions = async () => {
    try {
      // Simulate fetching data from a URL
      const response = await fetch('http://localhost:5000/question/questions');
      const data = await response.json();

      // Filter questions by section 

      const creativityQues = data.filter(question => question.section === "Creativity and innovation");
      setCreativityQuestions(creativityQues);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < creativityQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(''); // Reset selected option when navigating to the next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setSelectedOption(''); // Reset selected option when navigating to the previous question
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = () => {
    const selectedAnswer = selectedOption;
    // Handle user's answer selection
    // Compare selectedAnswer with correctAnswer to determine correctness
    // Update UI to reflect user's choice
  };

  const currentQuestion = creativityQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="header">
         <img src ={logo} style={{width:150}} alt="logo"/>
         <h4><b>Section C:Creativity and innovation Questions</b></h4>

         <span>
          <b>59:49</b>
          <button>End Assessment</button></span>
       </div>

      <div className='pagination'>
        {cognitiveAbilityQuestions.map((question, index) => (
          <div
              key={index}
              className={`pagination-circle ${answeredQuestions[index] ? 'answered' : 'unanswered'}`}  onClick={() => setCurrentQuestionIndex(index)}>

                {index + 1}
              </div>
        ))}
      </div>
      
          <div className="question">
            <h4>{currentQuestionIndex + 1}. {currentQuestion.question}</h4>
            <form>
              {currentQuestion.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option-${index}`}  className="options">{option}</label>
                </div>
              ))}
            </form>
          </div>
        )}

        <div className="bottom-buttons">
          <button className="btn btn-left" onClick={handlePrevious}>Previous</button>
          <button className="btn btn-right" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CreativityQues;
