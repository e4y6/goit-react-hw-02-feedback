import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

const Title = styled.h2`
  padding: 5px;
  text-align: center;
  color: #7f5f7f;
`;

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
