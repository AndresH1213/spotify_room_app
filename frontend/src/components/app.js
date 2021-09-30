import React, { Component } from "react";
import { render } from "react-dom";

import HomePage from "./homePage"; 
import CreateRoomPage from "./createRoomPage";
import RoomJoinPage from "./roomJoinPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <HomePage/>
            </div> 
            );
    }
}

const appDiv = document.getElementById('app')
render(<App/>, appDiv)