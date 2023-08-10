import React from 'react';
import { Container } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

import { Statistics } from './Statistics';
import { useState } from 'react';

export const Feedback = () => {
  const options = ['Good', 'Neutral', 'Bad'];
  const [statistics, setStatistics] = useState({ good: 0, bad: 0, neutral: 0 });

  const countTotalFeedback = () => {
    return statistics.good + statistics.neutral + statistics.bad;
  };

  const handleChangeComment = event => {
    const { name } = event.target;
    setStatistics(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() > 0
      ? ((statistics.good / countTotalFeedback()) * 100).toFixed(1)
      : 0;
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleChangeComment}
        />
        {countTotalFeedback() > 0 ? (
          <Statistics
            statistics={statistics}
            countTotalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
