import React, { useReducer, useEffect } from 'react';
import { RingsAnimation } from './components/RingsAnimation';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Footer from './components/Footer';
import './App.css';

const initialState = {
  counter: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  answer: '',
  answersCount: {},
  result: '',
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_QUESTIONS':
      return {
        ...state,
        question: quizQuestions[0].question,
        answerOptions: action.payload,
      };
    case 'SET_ANSWER':
      return {
        ...state,
        answersCount: {
          ...state.answersCount,
          [action.payload]: (state.answersCount[action.payload] || 0) + 1,
        },
        answer: action.payload,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        counter: state.counter + 1,
        questionId: state.questionId + 1,
        question: quizQuestions[state.counter + 1].question,
        answerOptions: quizQuestions[state.counter + 1].answers,
        answer: '',
      };
    case 'SET_RESULT':
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      shuffleArray(question.answers)
    );
    dispatch({ type: 'INIT_QUESTIONS', payload: shuffledAnswerOptions[0] });
  }, []);

  const shuffleArray = (array) => {
    return array;
  };

  const handleAnswerSelected = (event) => {
    const answer = event.currentTarget.value;
    dispatch({ type: 'SET_ANSWER', payload: answer });

    if (state.questionId < quizQuestions.length) {
      setTimeout(() => dispatch({ type: 'NEXT_QUESTION' }), 300);
    } else {
      setTimeout(() => setResults(), 300);
    }
  };

  const setResults = () => {
    const answersCount = state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    const result = answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );

    dispatch({
      type: 'SET_RESULT',
      payload:
        result.length === 1
          ? result[0]
          : 'Тест не может определить приоритет',
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <RingsAnimation />
      </div>
      {state.result ? (
        <Result quizResult={state.result} />
      ) : (
        <Quiz
          answer={state.answer}
          answerOptions={state.answerOptions}
          questionId={state.questionId}
          question={state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
