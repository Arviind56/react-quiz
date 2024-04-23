import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect } from "react";
function Timer({ dispatch, secondsRemaining }) {
  //use effect run twice in developer mode
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.ceil(secondsRemaining % 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
