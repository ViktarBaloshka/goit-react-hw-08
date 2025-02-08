import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
