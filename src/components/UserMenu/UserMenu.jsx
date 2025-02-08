import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { clsx } from "clsx";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={clsx(s.userMenu)}>
      <h2 className={clsx(s.headerText)}>Welcome, {user.name}</h2>
      <button
        onClick={() => dispatch(logoutThunk())}
        className={clsx(s.btnLogout)}
      >
        Logout
      </button>
    </div>
  );
}
