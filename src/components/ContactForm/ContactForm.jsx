import clsx from "clsx";
import s from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const re = /^\d{3}-\d{3}-\d{4}$/;
  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(re, "Enter the number. Example: 111-111-1111 ")
      .required("Required"),
  });

  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, action) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={clsx(s.form)}>
        <label className={clsx(s.label)} name="name">
          Name
        </label>
        <Field className={clsx(s.input)} type="text" name="name" />
        <ErrorMessage name="name" className={clsx(s.error)} component="div" />
        <label className={clsx(s.label)} name="number">
          Number
        </label>
        <Field className={clsx(s.input)} type="text" name="number" />
        <ErrorMessage name="number" className={clsx(s.error)} component="div" />
        <button className={clsx(s.button)} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
