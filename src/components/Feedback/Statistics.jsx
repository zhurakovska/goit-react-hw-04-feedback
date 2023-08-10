import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsTitle, Statistic } from './Feedback.styled';

export const Statistics = ({
  statistics,
  countTotalFeedback,
  positivePercentage,
}) => {
  const { good, bad, neutral } = statistics;
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <Statistic>Good:{good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {countTotalFeedback}</Statistic>
      <Statistic>Positive feedback: {positivePercentage}%</Statistic>
    </>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
