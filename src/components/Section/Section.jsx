import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

const Section = ({ title, children}) => {
    return(
        <section className={css.sectoin}>
            <h2 className={css.sectoin__title}>{title}</h2>
            {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
}

export default Section;
