import React, { Component } from "react";
import ReactDOM from "react-dom";
import Graph from "./Graph";
import Config from "./Config";

class App extends Component {
    render() {
        return (
            <div>
                <div><Graph /></div>
                <div><Config onSent={doFetchValues}/></div>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById("main"));
