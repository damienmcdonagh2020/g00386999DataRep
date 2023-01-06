import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Welcome to the online Cook book!! <br>
                </br> Where you can read and add menu Items </h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}