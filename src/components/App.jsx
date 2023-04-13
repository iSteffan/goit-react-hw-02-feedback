import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countGoodMarks = () => {
  //   this.setState(prevState => {
  //     console.log(prevState)
  //     return { good: Number(prevState.value + 1), };
  //   });
  // };

  // countGoodMarks = () => {
  //   this.setState({good: 2 }
  //   );
  // };



countGoodMarks = () => {
    this.setState(oldData => {
      let obj = { ...oldData };
      obj.good = oldData.good + 1;
      return obj;
    });
  };

  countNeutralMarks = () => {
    this.setState(oldData => {
      let obj = { ...oldData };
      obj.neutral = oldData.neutral + 1;
      return obj;
    });
  };

  countBadMarks = () => {
    this.setState(oldData => {
      let obj = { ...oldData };
      obj.bad = oldData.bad + 1;
      return obj;
    });
  };

countTotalFeedback=()=>{return this.state.good + this.state.neutral + this.state.bad;}
  
countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100 || 0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    

    return(
    <div>
        <div>
            <h2>Please leave feedback</h2>
            <ul>
            <li>
              <button onClick={this.countGoodMarks}>
                Good</button>
            </li>
            <li>
              <button onClick={this.countNeutralMarks}>Neutral</button>
            </li>
            <li>
              <button onClick={this.countBadMarks}>Bad</button>
            </li>
            </ul>
        </div >
        <div>
            <h2>Statistics</h2>
            <ul>
                    <li>
              <p>Good: { good}</p>
                    </li>
                    <li>
              <p>Neutral: { neutral}</p>
                    </li>
                    <li>
              <p>Bad: { bad}</p>
            </li>
            <li>
              <p>Total: { this.countTotalFeedback()}</p>
            </li>
             <li>
              <p>Positive feedback: { this.countPositiveFeedbackPercentage()}%</p>
                    </li>
            </ul>
        </div >
    </div >
  );
  }
}
