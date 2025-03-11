import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import '../App.css';

const Quiz = (props) => {
  const renderAnswerOptions = (key) => (
    <AnswerOption
      key={key.content}
      answerContent={key.content}
      answerType={key.type}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
    />
  );

  return (
    <TransitionGroup className="container" component="div">
      <CSSTransition
        key={props.questionId}
        timeout={{ enter: 800, exit: 500 }}
        classNames="fade"
        appear
      >
        <div style={{ position: 'absolute', width: '100%', top: 0, left: 0 }}>
          <QuestionCount counter={props.questionId} total={props.questionTotal} />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
