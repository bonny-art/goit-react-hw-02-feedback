export const Statistics = ({
  statsKeys,
  statsData,
  total,
  positivePercentage,
}) => {
  return (
    <div>
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
