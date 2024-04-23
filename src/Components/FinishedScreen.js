function FinishedScreen({ points, maxpossiblepoints, highscores, dispatch }) {
  const percentage = (points * 100) / maxpossiblepoints;
  // let percentage = 87;
  let emoji;
  if (percentage === 100) {
    emoji = "🥇 ";
  } else if (percentage >= 80) {
    emoji = "🥈";
  } else if (percentage >= 60) {
    emoji = "🥉";
  } else {
    emoji = "💩";
  }
  return (
    <>
      <div className="result">
        {emoji} your Scored <strong>{points}</strong>/ {maxpossiblepoints} (
        {Math.ceil(percentage)}%)
      </div>
      <p className="highscore">
        (HighScore: {highscores} points)
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          restart quiz
        </button>
      </p>
    </>
  );
}

export default FinishedScreen;
