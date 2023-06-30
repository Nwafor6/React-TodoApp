import React, { Component } from "react";

class Modal extends Component {
  state = {
    title: "",
    status: false
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
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" id="status" onChange={this.handleChange} />
                  </div>
                  <input type="text" className="form-control" aria-label="Text input with checkbox" id="title" onChange={this.handleChange}  required minLength="6"/>
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

export default Modal;
