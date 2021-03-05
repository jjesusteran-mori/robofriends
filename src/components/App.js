import React from "react";
import CardList from "./cardList/cardList";
import SearchBox from "./searchBox/searchBox";
import { robots } from "./robots/robots";

const App = () => {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />;
        </div>
    );
};

export default App;
