export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
