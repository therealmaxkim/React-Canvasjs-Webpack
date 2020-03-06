import React, { Component } from "react";
import ReactDOM from "react-dom";
import Graph from "./Graph";

class App extends Component {
    render() {
        return (
            <div><Graph /></div>
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById("main"));