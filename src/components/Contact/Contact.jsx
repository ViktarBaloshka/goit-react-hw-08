import clsx from "clsx";
import s from "../Contact/Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={clsx(s.contactBox)}>
      <div>
        <p className={clsx(s.text)}>
          <FaUser className={clsx(s.icons)} />
          {name}
        </p>

        <p className={clsx(s.text)}>
          <FaPhone className={clsx(s.icons)} />
          {number}
        </p>
      </div>
      <button
        className={clsx(s.btnDelete)}
        onClick={handleDelete}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
