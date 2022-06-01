import PropsType from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Wrapper>
      <Button onClick={() => onLeaveFeedback('good')}>good</Button>
      <Button onClick={() => onLeaveFeedback('neutral')}>neutral</Button>
      <Button onClick={() => onLeaveFeedback('bad')}>bad</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
  background-color: #faafaf;
`;

const Button = styled.button`
  margin: 0 15px;
  height: 45px;
  width: 80px;
  cursor: pointer;
  border: 1px solid #3476ff;
  border-radius: 45%;
  background-color: #ff12d7;
  color: #ffe;
`;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropsType.func.isRequired,
};

export default FeedbackOptions;
