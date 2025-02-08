import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={clsx(s.contactList)}>
      {contacts.map((contact) => (
        <li className={clsx(s.contactListItems)} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
