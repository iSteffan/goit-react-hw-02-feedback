import { Component } from 'react';

export class Feedback extends Component {
{/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */ }
{/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
  render() {
    return(
    <div>
        <div>
            <h2>Please leave feedback</h2>
            <ul>
                <li><button>Good</button></li>
                <li><button>Neutral</button></li>
                <li><button>Bad</button></li>
            </ul>
        </div >
        <div>
            <h2>Statistics</h2>
            <ul>
                    <li>
                        <p>Good</p>
                    </li>
                    <li>
                        <p>Neutral</p>
                    </li>
                    <li>
                        <p>Bad</p>
                    </li>
            </ul>
        </div >
    </div >
  );
  }

}
