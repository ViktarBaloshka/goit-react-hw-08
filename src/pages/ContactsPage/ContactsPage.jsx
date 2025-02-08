import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operation";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
}
