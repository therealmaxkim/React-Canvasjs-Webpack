import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <div>Test<Home /></div>
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById("main"));