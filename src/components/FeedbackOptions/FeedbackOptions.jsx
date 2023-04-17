import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
          {options.map((mark, i) => {
            return (
              <li key={i}>
                <button onClick={() => onLeaveFeedback(mark)}>{mark}</button>
            </li>)
          })}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};