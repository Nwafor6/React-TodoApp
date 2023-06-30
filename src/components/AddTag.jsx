import React, { Component } from "react";

class TagForm extends Component {
  state = {
    id:"", 
    tagname:"", 
    task:"", 
    icon:""
  };

  handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    this.setState({
      [id]: inputValue
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add further logic here to handle the form submission
    this.props.addList(this.state);
    document.querySelector("#form").reset();
  };

  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Todo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit} id="form">
                <div className="input-group mb-3">
                    <select name="" id="">
                        <option value=""><i className="bi bi-dash-circle-fill"></i></option>
                    </select>
                  <input type="text" className="form-control" aria-label="Text input with checkbox" id="tagname" onChange={this.handleChange} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-warning">Add List</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TagForm;
