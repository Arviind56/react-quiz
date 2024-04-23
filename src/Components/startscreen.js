import React from "react";
function startscreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome To The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery </h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        let's start the quiz
      </button>
    </div>
  );
}

export default startscreen;
