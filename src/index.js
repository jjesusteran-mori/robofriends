import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./components/cardList/cardList";
import { robots } from "./components/robots/robots";
import "tachyons";

ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
