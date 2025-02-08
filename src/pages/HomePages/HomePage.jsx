import clsx from "clsx";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={clsx(s.homePage)}>
      <h2>Phonebook manager</h2>
    </div>
  );
}
