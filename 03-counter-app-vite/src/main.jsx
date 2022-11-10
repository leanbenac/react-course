import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from './FirstApp'
import CounterApp from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CounterApp  value={ 1 } /> */}
    <FirstApp title="Hola, Soy Goku" subTitle="soy un subtitulo" />
  </React.StrictMode>
);
 