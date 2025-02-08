import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import clsx from "clsx";
import s from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={clsx(s.headerNav)}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink>}
    </nav>
  );
}
