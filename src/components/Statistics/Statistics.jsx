import { Container, Span } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <Span>Good: {good}</Span>
      <Span>Neutral: {neutral}</Span>
      <Span>Bad: {bad}</Span>
      <Span>Total: {total}</Span>
      <Span>Positive Feedback: {positivePercentage}%</Span>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
