import { Field, Formik, Form } from "formik";
import Button from "@mui/material/Button";
import s from "./LoginForm.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const initialValues = {
    password: "",
    email: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    navigate("/");
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={clsx(s.wrapperLogin)}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={clsx(s.loginForm)}>
          <h3 className={clsx(s.titleLogin)}>Login</h3>
          <label className={clsx(s.labelLogin)}>
            <span>Email:</span>
            <Field className={clsx(s.inputLogin)} name="email" />
          </label>
          <label className={clsx(s.labelLogin)}>
            <span>Password</span>
            <Field
              className={clsx(s.inputLogin)}
              name="password"
              type="password"
            />
          </label>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
