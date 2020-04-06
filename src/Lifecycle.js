import React, { Component } from "react";

export default class Lifecycle extends Component {
    constructor() {
        console.log("constructor()");

        super();

        this.state = {
            clicks: 0,
            visible: true,
        };
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount()");
    }

    incClicks = () => {
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1,
        }));
    };

    hide = () => {
        this.setState({ visible: false });
    };

    render() {
        console.log("render()");

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
