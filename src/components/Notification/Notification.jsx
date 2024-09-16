import css from "./Notification.module.css";

export default function Notification({hidden}) {
  return <p className={css.emptyResult} hidden={hidden}> No feedback yet </p>
}
