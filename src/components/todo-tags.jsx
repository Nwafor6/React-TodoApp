import React, {Component, useState, useEffect} from "react"
import TodoDetail from "./TodoDetail"
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

class TodoTags extends Component{
    state={
        todotags:[
            {id:1, tagname:"Today", task:4, icon:"icon1"},
            {id:2, tagname:"Planned", task:2, icon:"icon2"},
            {id:3, tagname:"Personal", task:6, icon:"icon3"},
            {id:4, tagname:"Work", task:5, icon:"icon4"},
            {id:42, tagname:"Work", task:5, icon:"icon4"},
            {id:41, tagname:"Work", task:5, icon:"icon4"},
        ],
        selectedTag: null
    };
    handleTagClick=(tag)=>{
        this.setState({selectedTag:tag})
        console.log(tag)
        localStorage.removeItem("myData");//remove the previous item 
        localStorage.setItem("myData",JSON.stringify(tag));
    };
    render(){
        const {todotags,selectedTag }= this.state;
        const todotaglist = todotags.length ? (
            todotags.map(todotag=>{
                return(
                    <div className="card-holder shadow mt-3" key={todotag.id}>
                        <div className="maincard">
                            <div className="cardbody">
                                <div className="cardicon"><i className="bi bi-sun"></i></div>
                                <div className="cardtitle" key={todotag.id} onClick={()=>this.handleTagClick(todotag)}><b className="mb-0 "><Link className="text-dark" to="/tododetails">{todotag.tagname}</Link></b> <br />
                                <small className="cardtaskNo ">{todotag.task} task</small>
                                </div>
                            </div>
                            <div className="carddropdown" ><i className="bi bi-three-dots-vertical"></i></div>
                        </div>
                    </div>
                )
            })
        ) : (
            <p>No tags Available yet</p>
        )
        return (
            <>
            {<Navbar/>}
            <div className="container pl-5 pr-5 pb-5">
                {todotaglist}
            </div>
            </>
        )
    }
}
export default TodoTags