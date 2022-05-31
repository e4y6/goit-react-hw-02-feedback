import PropTypes from 'prop-types';
import styled from 'styled-components';

const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

const Title = styled.p`
  text-align: center;
  border-left: 20px solid #fa7af9;
  border-right: 20px solid #fa7af9;
  padding: 5px;
  font-weight: 500;
  font-size: 18px;
  color: #fde;
  background-color: #a4e;
`;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
