import { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedback = window.localStorage.getItem("feedback");

    if (feedback !== null) {
      return JSON.parse(feedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    let variableName = feedbackType.target.id;

    if (variableName === "good") {
      setFeedbacks({
        ...feedbacks,
        good: feedbacks["good"] + 1,
      });
    } else if (variableName === "neutral") {
      setFeedbacks({
        ...feedbacks,
        neutral: feedbacks["neutral"] + 1,
      });
    } else if (variableName === "bad") {
      setFeedbacks({
        ...feedbacks,
        bad: feedbacks["bad"] + 1,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const hasFeedback = totalFeedback > 0;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateCallback={updateFeedback}
        resetCallback={resetFeedback}
        hasFeedback={hasFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          model={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          hasFeedback={hasFeedback}
        />
      ) : (
        <p className="empty-result"> No feedback yet </p>
      )}
    </>
  );
}

export default App;
