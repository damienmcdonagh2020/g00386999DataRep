import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/book/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setCover(response.data.cover);
            setAuthor(response.data.author);
            setDescription(response.data.description)
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editmenu = {
            title:title,
            cover:cover,
            author:author,
            description:description
        }

        axios.put('http://localhost:4000/api/book/'+id,editmenu)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Menu Title: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Food Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={cover}
                            onChange={(e)=>{setCover(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit chef Creator: </label>
                        <input type="text"
                            className="form-control"
                            value={author}
                            onChange={(e)=>{setAuthor(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit the description: </label>
                        <input type="text"
                            className="form-control"
                            value={author}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Edit Book"></input>
            </form>
        </div>
    );
}