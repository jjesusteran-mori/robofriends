import React, { Component } from "react";
import CardList from "./cardList/cardList";
import SearchBox from "./searchBox/searchBox";
import { robots } from "./robots/robots";

//state = and object that describes your applications
//state is able to change

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: "",
        };
    }
    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchfield: event.target.value });
    };
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robots) => {
            return robots.name
                .toLowerCase()
                .includes(searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />;
            </div>
        );
    }
}

export default App;
