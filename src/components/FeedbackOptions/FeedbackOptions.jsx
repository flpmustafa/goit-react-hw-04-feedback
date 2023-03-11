import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ handleIncrementGood, handleIncrementNeutral, handleIncrementBad }) => {
    return (
        <div className={css.feedbackoptions}>
            <button className={css.btn} type="button" onClick={handleIncrementGood}>
                Good
                </button>
                <button className={css.btn} type="button" onClick={handleIncrementNeutral}>
                Neutral
                </button>
                <button className={css.btn} type="button" onClick={handleIncrementBad}>
                Bad
                </button>     
        </div>           
    );
};

FeedbackOptions.propTypes = {
    handleIncrementGood: PropTypes.func,
    handleIncrementNeutral: PropTypes.func,
    handleIncrementBad: PropTypes.func,
}

export default FeedbackOptions;

