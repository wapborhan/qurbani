import React, { Component } from "react";
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      message: "",
      isSubmitDisabled: true,
      modalOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //triggered everytime value changes in our textboxes
  handleChange(event) {
    this.setState(
      {
        //  use dynamic name value to set our state object property
        [event.target.name]: event.target.value,
      },
      function () {
        this.canSubmit();
      }
    );
  }

  canSubmit() {
    const { name, amount } = this.state;
    // If Input Value is blank Button are Disable
    if (name.length > 0 && amount.length > 0) {
      this.setState({
        isSubmitDisabled: false,
      });
    } else {
      this.setState({
        isSubmitDisabled: true,
      });
    }
  }
  // triggered on submit
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.amount >= 64260) {
      this.setState({
        message: `আপনার উপর কুরবানি ওয়াজিব হয়েছে, 
        \n\n কুরবানির প্রস্তুতি নেয়ার আহবান রইল।`,
      });
    } else {
      this.setState({
        message: `আপনার উপর কুরবানি ওয়াজিব হয়নি,\n\n আল্লাহ তায়ালা আপনাকে কুরবানি দেয়ার তাওফিক দান করুন।"`,
      });
    }

    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    return (
      <div className="border shadow rounded mb-3">
        <div className="form m-3">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">
                  আপনার নাম লিখুন
                </label>
                <input
                  className="mb-2"
                  type="text"
                  placeholder=" নাম"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="amount" className="form-label">
                  প্রয়োজনের অতিরিক্ত আপনি কত টাকার মালিক ?
                </label>
                <input
                  className="mb-2"
                  type="number"
                  placeholder=" টাকা"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <div className="d-block w-100 mb-2">
                  <button
                    className="btn btn-success "
                    id="income-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#incomemodal"
                    disabled={this.state.isSubmitDisabled}
                  >
                    আপডেট
                  </button>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
        <Modal size="lg" isOpen={this.state.modalOpen}>
          <ModalHeader toggle={this.toggleModal} charCode="close">
            <span>
              {" "}
              প্রিয় <strong>{this.state.name}</strong>
            </span>
          </ModalHeader>
          <ModalBody>
            <h2> {this.state.message}</h2>
          </ModalBody>
          <ModalFooter className="text-center justify-content-center">
            বিস্তারিত জানতে{" "}
            <NavLink to="/qurbani-details">এখানে ক্লিক </NavLink>
            করুন
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
