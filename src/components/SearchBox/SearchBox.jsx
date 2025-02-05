import { useId } from "react";
import clsx from "clsx";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputId = useId();

  return (
    <div className={clsx(s.searchBox)}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        id={inputId}
        className={clsx(s.searchBoxInput)}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
