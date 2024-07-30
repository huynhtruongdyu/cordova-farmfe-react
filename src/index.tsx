import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "normalize.css";
import router from "./router";

const startApp = () => {
  const container = document.querySelector("#root");
  const root = createRoot(container as HTMLElement);

  root.render(<RouterProvider router={router} />);
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
