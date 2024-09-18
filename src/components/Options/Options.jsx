import css from "./Options.module.css";

export default function Options({
  updateCallback,
  resetCallback,
  hasFeedback,
}) {
  return (
    <div className={css.options}>
      <button onClick={() => updateCallback("good")}>
        Good
      </button>
      <button onClick={() => updateCallback("neutral")}>
        Neutral
      </button>
      <button onClick={() => updateCallback("bad")}>
        Bad
      </button>
      <button onClick={resetCallback} hidden={!hasFeedback}>
        Reset
      </button>
    </div>
  );
}
