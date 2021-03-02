import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./components/card/card";
import "tachyons";

ReactDOM.render(
    <div>
        <Card />
        <Card />
        <Card />
    </div>,
    document.getElementById("root")
);
