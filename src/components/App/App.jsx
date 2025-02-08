import { Routes, Route } from "react-router-dom";
import "../App/App.module.css";
import HomePage from "../../pages/HomePages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Layout from "../Layout/Layout";
import RegisterPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/slice";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="phonebook"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="register"
        element={
          <RestrictedRoute>
            <RegisterPage />
          </RestrictedRoute>
        }
      />
      <Route
        path="login"
        element={
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
