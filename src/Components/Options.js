function Options({ questions, dispatch, answer }) {
  const hasentered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((options, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasentered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          disabled={answer != null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
