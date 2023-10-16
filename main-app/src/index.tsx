import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { registerMicroApps, start } from "qiankun";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import App from "./App";

registerMicroApps([
  {
    name: "sub-app-1",
    entry: "//localhost:2998",
    container: "#micro-app-container",
    activeRule: "/sub-app-1",
  },
  {
    name: "sub-app-2",
    entry: "//localhost:2999",
    container: "#micro-app-container",
    activeRule: "/sub-app-2",
  },
]);
start();

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
