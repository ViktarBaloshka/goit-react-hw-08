import clsx from "clsx";
import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className={clsx(s.headerNav)}>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}
