import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup>
      {options.map((option, index) => (
        <Button
          key={index}
          name={option.toLowerCase()}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
