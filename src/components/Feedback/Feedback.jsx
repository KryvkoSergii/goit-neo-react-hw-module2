import css from "./Feedback.module.css";
import PropTypes from "prop-types";

export default function Feedback({
  model,
  totalFeedback,
  positiveFeedback,
  hasFeedback,
}) {
  return (
    <div className={css.feedback}>
      <p>Good: {model.good} </p>
      <p>Neutral: {model.neutral} </p>
      <p>Bad: {model.bad} </p>
      <p hidden={!hasFeedback}>Total: {totalFeedback} </p>
      <p hidden={!hasFeedback}>Positive: {positiveFeedback}% </p>
    </div>
  );
}

let Feedbacks = PropTypes.shape({
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
});

Feedback.propTypes = {
  model: Feedbacks,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
  hasFeedback: PropTypes.bool,
};
