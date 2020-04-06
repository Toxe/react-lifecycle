import React, { Component } from "react";
import Lifecycle from "./Lifecycle";

export default class App extends Component {
    state = {
        showLifecycle: true,
    };

    toggleLifecycle = () => {
        this.setState((prevState) => ({
            showLifecycle: !prevState.showLifecycle,
        }));
    };

    render() {
        return (
            <div style={style}>
                <div>
                    <button onClick={this.toggleLifecycle}>Toggle Lifecycle</button>
                </div>

                {this.state.showLifecycle && <Lifecycle />}
            </div>
        );
    }
}

const style = {
    background: "#ddd",
    padding: "10px",
};
