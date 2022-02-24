import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';

const Section = ({ title, children }) => {
  return (
    <section className="my-4">
      <SectionTitle title={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
