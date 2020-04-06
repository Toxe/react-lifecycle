import React, { Component } from "react";

export default class Lifecycle extends Component {
    state = {
        clicks: 0,
        visible: true,
    };

    incClicks = () => {
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1,
        }));
    };

    hide = () => {
        this.setState({ visible: false });
    };

    render() {
        if (!this.state.visible)
            return null;

        return (
            <div style={style}>
                <div>
                    <em>Look at Console for component lifecycle messages</em>
                </div>
                <div>
                    <button onClick={this.incClicks}>Click ({this.state.clicks})</button>
                    <button onClick={this.hide}>Hide me</button>
                </div>
            </div>
        );
    }
}

const style = {
    background: "#eee",
    padding: "10px",
};
