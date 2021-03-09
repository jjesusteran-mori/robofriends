import React, { Component } from "react";
import CardList from "./components/cardList/cardList";
import SearchBox from "./components/searchBox/searchBox";
// import { robots } from "./components/robots/robots";
import Scroll from "./components/scroll/scroll";
import "./App.css";

//state = and object that describes your applications
//state is able to change

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }));
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
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />;
                </Scroll>
            </div>
        );
    }
}

export default App;
