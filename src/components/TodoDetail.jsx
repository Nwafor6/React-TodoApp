import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from './modal';

class  TodoDetail extends Component {
    state={
        detailList:
        [
            {id:1, title:"Buy a book", status:false},
            {id:2, title:"Cook Food", status:true},
            {id:3, title:"Delete all Folders", status:true},
        ]
    };

    addList = (item) => {
        console.log(item);
        item.id=Math.random();
        let previousItems=[...this.state.detailList, item];
        this.setState({
            detailList:previousItems,
        })
      };

    render(){
        const savedData = localStorage.getItem('myData');
        const tag = savedData ? JSON.parse(savedData) : null; 

        // check for the current state's status of the checkbox then update it 
        const handleCompleted=(item)=>{
            if (item.status === false){
                item.status = true;
            }else{
                item.status = false;
            }
            const prevItems = [...this.state.detailList];
            this.setState({
                detailList:prevItems
          })
            
        };
        
        const {detailList} = this.state;
        console.log(detailList.length)
        const items = detailList.length ? (
            detailList.map(item=>{
                return(
                    <div className="taglists" key={item.id}>
                        <div className="checkbox"><input  onChange={()=>{handleCompleted(item)}} type="checkbox" name="" id="checkbox" checked={item.status} /></div>
                        <div className="todoname"><b>{item.title}</b></div>
                    </div>
                )
            })
        ):(
            <div className="alert alert-warning" role="alert">
                 No Todo attached to this tag
            </div>
        );
        const handleDeleteConfirmation=()=>{
            document.querySelector(".confirmDelete").style.display="block"
        }
        const handleDelete =()=>{
            console.log("Yes Delete")
            let stateItems=this.state.detailList
            stateItems.forEach(item=>{
                if (item.status == true){//check if the item's status is completed 
                    let _item=stateItems.filter(todoitem=>{
                        return todoitem.status !==item.status
                    });
                    this.setState({
                        detailList:_item
                    })
                }
            })
            document.querySelector(".confirmDelete").style.display="none"
        }
        const handleGoBack =()=>{
            document.querySelector(".confirmDelete").style.display="none"
        }
        return(
    <>
        <div className="main-nav bg-color">
            <nav className="navbar navbar-expand-lg navbar-light mb-5 container">
                <div className="container-fluid ">
                    <div><Link to="/todotags"><i className="bi bi-arrow-left"></i></Link></div>
                    <a className="navbar-brand" href="#"><i className='bi bi-three-dots-vertical'></i></a>
                </div>
            </nav>
        </div>
        <div className="container">
            <div className="tagname">
                <div className="icon-hoder"><i className="bi bi-sun"></i></div>
                <div className="tagbody">
                    <small className='mb-0'>{tag.task}</small>
                    <p><b>{tag.tagname} </b></p>
                </div>
            </div>
            <div className="confirmDelete">
                <div className="alert alert-warning" role="alert">
                    <p>Are you sure you want to delete completed <b>All tasks</b>?</p>
                    <div className="delconfirmBtn">
                        <button className='btn btn-danger btn-sm' id='confirmDelete'  onClick={()=>{handleDelete()}}>Delete</button>
                        <button className='btn btn-primary btn-sm' id='goBack' onClick={()=>{handleGoBack()}}>Back</button>
                    </div>
                </div>
            </div>
            <div className="container">{items}
                {/* Open modal for inputing a new todo */}
                <div className="addToList">
                    <button className='border-0 bg-white' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-circle-fill"></i></button>
                </div>
                <div className="delToList">
                    <button className='border-0 bg-white' id='deletBtn' onClick={()=>handleDeleteConfirmation()}><i className="bi bi-dash-circle-fill"></i></button>
                </div>
            </div>
        </div>
        {<Modal addList={this.addList} />}
    </>

        )
    }

};
export default TodoDetail;