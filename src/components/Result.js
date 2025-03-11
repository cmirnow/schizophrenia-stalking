import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';

const Result = (props) => (
  <TransitionGroup className="container result" component="div">
    <CSSTransition
      key="result"
      timeout={{ enter: 800, exit: 500 }}
      classNames="fade"
      appear
    >
      <div style={{ position: 'absolute', width: '100%', top: 0, left: 0 }}>
        <strong>Результат.</strong> {props.quizResult}.
      </div>
    </CSSTransition>
  </TransitionGroup>
);

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
