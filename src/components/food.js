import React from "react";
import {FoodItem} from './foodITem.js';

export class Food extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                return <FoodItem book={book} key={book._id} Reload={this.props.Reload}></FoodItem>
            }
        );
    }
}