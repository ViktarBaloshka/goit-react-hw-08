import "../App/App.module.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/slice";
import { lazy, Suspense } from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegisterPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../../pages/HomePages/HomePage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}
