import clsx from "clsx";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSelectors";
import { logoutThunk } from "../../redux/auth/authOperations";

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={clsx(s.header)}>
      {isLoggedIn && (
        <h2 className={clsx(s.headerText)}>Welcome, {user.name}</h2>
      )}
      <nav className={clsx(s.headerNav)}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        {isLoggedIn ? (
          <button
            onClick={() => dispatch(logoutThunk())}
            className={clsx(s.btnLogout)}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register"> Registration</NavLink>
            <NavLink to="/login"> LogIn</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
