export const FeedbackOptions = ({
  addGoodFeedback,
  addNeutralFeedback,
  addBadFeedback,
}) => {
  return (
    <div>
      <button type="button" onClick={addGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={addNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={addBadFeedback}>
        Bad
      </button>
    </div>
  );
};
