import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeDescriptipm = this.onChangeDescriptipm.bind(this);
        
        this.state = {
            title:'',
            cover:'',
            description:'',
            author:''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.description},
        ${this.state.author}`);

        const food ={
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author,
            description:this.state.description
        }

        axios.post('http://localhost:4000/api/food',food)
        .then()
        .catch();

        this.setState({
            title:'',
            cover:'',
            description:'',
            author:''
        })
    }

    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    onChangeDescriptipm(e){
        this.setState({
            description:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Menu Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label> Food Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Chef: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Ingredient" />
                </form>
            </div>
        );
    }
}