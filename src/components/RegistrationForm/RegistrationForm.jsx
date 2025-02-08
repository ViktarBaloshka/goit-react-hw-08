import { Field, Formik, Form } from "formik";
import Button from "@mui/material/Button";
import s from "./RegistrationForm.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const initialValues = {
    name: "",
    password: "",
    email: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(registrationThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={clsx(s.wrapperRegister)}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={clsx(s.registerForm)}>
          <h3 className={clsx(s.titleRegister)}>Register</h3>
          <label className={clsx(s.labelRegister)}>
            <span>Name:</span>
            <Field className={clsx(s.inputRegister)} name="name" />
          </label>
          <label className={clsx(s.labelRegister)}>
            <span>Email:</span>
            <Field className={clsx(s.inputRegister)} name="email" />
          </label>
          <label className={clsx(s.labelRegister)}>
            <span>Password:</span>
            <Field
              className={clsx(s.inputRegister)}
              name="password"
              type="password"
            />
          </label>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
