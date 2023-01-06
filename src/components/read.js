import React from "react";
import { Food } from "./food";
import axios from "axios";

export class Read extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/food')
            .then((response) => {
                this.setState({ food: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        food: []
    }

    render() {
        return (
            <div>
                <Food food={this.state.food} Reload={this.componentDidMount}></Food>
            </div>
        );
    }
}