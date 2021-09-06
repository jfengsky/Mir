import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import App from "./App";
import { store } from "./store/index";
import reportWebVitals from "./reportWebVitals";
import 'antd/dist/antd.css';
import "./index.css";
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
      </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
