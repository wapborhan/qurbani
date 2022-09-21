import React, { Component } from "react";
import QuestList from "./QuestList";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.data,
      selectedQues: null,
    };
  }

  selectedQuesHandler = (ques) => {
    const question = this.state.question.filter((item) => item.id === ques)[0];
    this.setState({
      selectedQues: question,
    });
  };

  render() {
    console.log(this.state.selectedQues);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-3">
            <div className="title h1">কুরবানি নিয়ে কিছু প্রশ্ন উত্তর</div>
            <div className="subtitle h5">
              প্রশ্নগুলো মাসিক আল-কাওসার থেকে সংগ্রহ করা
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.question.map((item) => {
            // console.log(item);
            return (
              <QuestList
                key={item.id}
                item={item}
                selectedQues={this.state.selectedQues}
                selectedQuesHandler={() => {
                  this.selectedQuesHandler(item.id);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
