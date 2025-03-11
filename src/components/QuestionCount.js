import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Вопрос <span>{props.counter}</span> из <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
