import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


// name="Sara"
//  this.props.name 
class CustomProgress extends React.Component {
    
// get percentage as int: 
//   convertPercentage(){
//     const totalNum = ; 
//     let percentage = this.props.questionNumber/totalNum * 100; 
//   }
  render() {
    console.log(this.props.percentprogress)
    return (
      <ProgressBar
        percent={this.props.percentprogress}
        filledBackground="linear-gradient(to right, #000000, #1d3112)"
        //#991A36
      />
    );
  }
}

export default CustomProgress;