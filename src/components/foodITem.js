import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class FoodItem extends React.Component {
    constructor(){
        super();
        this.DeleteFood = this.DeleteFood.bind(this);
    }
    DeleteFood(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/food/'+this.props.food._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.food.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.food.cover}></img>
                            <footer >
                                {this.props.food.author}
                            </footer>
                            <footer >
                                {this.props.food.description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.food._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteFood}>Delete</Button>
                </Card>
            </div>
        );
    }
}