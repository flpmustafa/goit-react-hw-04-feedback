import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.statistics}>
        <span className={css.statistics__item}>Good: {good.value}</span>
        <span className={css.statistics__item}>Neutral: {neutral}</span>
        <span className={css.statistics__item}>Bad: {bad}</span>
        <span className={css.statistics__item}>Total: {total}</span>
        <span className={css.statistics__item}>Positive feedback: {positivePercentage}%</span>
        </div> 
    ) };

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    };

export default Statistics;