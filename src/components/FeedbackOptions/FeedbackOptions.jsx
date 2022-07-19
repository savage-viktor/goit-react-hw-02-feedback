import { Buttons, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            option={option}
          >
            {option}
          </Button>
        );
      })}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
