import { Container, Span } from './Statistics.styled';

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
