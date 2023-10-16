import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import User from "./containers/User";

let root: Root;

// @ts-ignore
function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );

  root.render(
    <React.StrictMode>
      <BrowserRouter
        basename={
          // @ts-ignore
          window.__POWERED_BY_QIANKUN__ ? "/sub-app-2" : "/"
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Link to="/">Home</Link> | <Link to="/user">User</Link>
      </BrowserRouter>
    </React.StrictMode>
  );
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

// @ts-ignore
export async function mount(props) {
  console.log("[react18] props from main framework", props);
  render(props);
}

// @ts-ignore
export async function unmount(props) {
  root.unmount()
}
