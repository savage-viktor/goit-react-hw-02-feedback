import { Buttons, Button } from './FeedbackOptions.styled';

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
