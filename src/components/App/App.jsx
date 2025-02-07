import { Routes, Route } from "react-router-dom";
import "../App/App.module.css";
import HomePage from "../../pages/HomePages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Layout from "../Layout/Layout";
import RegisterPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "../../redux/auth/authOperations";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="phonebook" element={<ContactsPage />} />
      </Route>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
