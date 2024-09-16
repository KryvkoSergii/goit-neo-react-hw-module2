import { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

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
      <Description />
      <Options
        updateCallback={updateFeedback}
        resetCallback={resetFeedback}
        hasFeedback={hasFeedback}
      />
      <Feedback
        model={feedbacks}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
        hasFeedback={hasFeedback}
      />
      <Notification hidden={hasFeedback} />
    </>
  );
}

export default App;
