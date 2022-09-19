import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      isSubmitDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    this.setState(
      {
        // use dynamic name value to set our state object property
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
    // get our const values by destructuring state
    event.preventDefault();
    const { name, amount } = this.state;
    // regular javascript alert function
    alert(`Your type detail: \n 
           Desc: ${name} \n 
           Amount: ${amount} \n
           `);
  };
  render() {
    // const [check, setCheck] = useState({
    //   name: "",
    //   amount: "",
    //   message: "",
    //   sayHi: "",
    // });

    // const handleBlur = (e) => {
    //   const newCheck = { ...check };
    //   newCheck[e.target.name] = e.target.value;
    //   setCheck(newCheck);
    // };

    // let handleSubmit = (e) => {
    //   if (check.name && check.amount) {
    //     const newCheck = { ...check };
    //     newCheck["amount"] = check.amount;
    //     newCheck["sayHi"] = "প্রিয়..";
    //     if (check.amount >= 64260)
    //       newCheck["message"] =
    //         "আপনার উপর কুরবানি ওয়াজিব হয়েছে, কুরবানির প্রস্তুতি নেয়ার আহবান রইল।";
    //     else
    //       newCheck["message"] =
    //         "আপনার উপর কুরবানি ওয়াজিব হয়নি, আল্লাহ তায়ালা আপনাকে কুরবানি দেয়ার তাওফিক দান করুন।";

    //     setCheck(newCheck);
    //   }
    //   e.preventDefault();
    // };
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
              <div className="col-md-3">
                <div className="d-block">
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
      </div>
    );
  }
}
