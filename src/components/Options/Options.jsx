import css from "./Options.module.css";

export default function Options({
  updateCallback,
  resetCallback,
  hasFeedback,
}) {
  return (
    <div className={css.options}>
      <button onClick={updateCallback} id="good">
        Good
      </button>
      <button onClick={updateCallback} id="neutral">
        Neutral
      </button>
      <button onClick={updateCallback} id="bad">
        Bad
      </button>
      <button onClick={resetCallback} hidden={!hasFeedback}>
        Reset
      </button>
    </div>
  );
}
