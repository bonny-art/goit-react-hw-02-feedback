export const Statistics = ({
  statsKeys,
  statsData,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {statsKeys.map(statsKey => {
        return (
          <p key={statsKey}>
            {statsKey}: {statsData[statsKey]}
          </p>
        );
      })}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
