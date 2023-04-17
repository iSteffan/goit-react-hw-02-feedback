import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <h2>Please leave feedback</h2>
            <ul>
            <li>
              <button onClick={this.countGoodMarks}>Good</button>
            </li>
            <li>
              <button onClick={this.countNeutralMarks}>Neutral</button>
            </li>
            <li>
              <button onClick={this.countBadMarks}>Bad</button>
            </li>
            </ul>
        </div >
    )
}