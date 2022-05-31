import PropsType from 'prop-types';
import styled from 'styled-components';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper>
      <Paragr>
        <Span> Good: </Span>
        {good}
      </Paragr>
      <Paragr>
        <Span> Neutral: </Span>
        {neutral}
      </Paragr>
      <Paragr>
        <Span> Bad: </Span>
        {bad}
      </Paragr>

      <Paragr>
        <Span> Total: </Span>
        {total}
      </Paragr>
      <Paragr>
        <Span> Positive feedback: </Span>
        {positivePercentage}%
      </Paragr>
    </Wrapper>
  );
};
const Span = styled.span`
  display: inline-block;
  width: 75%;
  color: #3f1afa;
`;

const Paragr = styled.p`
  height: 34px;
  color: #3a2ac9;
`;

const Wrapper = styled.div`
  padding: 7px 15%;
  font-size: 18px;
  background-color: #eeff44;
`;

Statistics.propTypes = {
  good: PropsType.number.isRequired,
  neutral: PropsType.number.isRequired,
  bad: PropsType.number.isRequired,
  total: PropsType.number.isRequired,
  positivePercentage: PropsType.number.isRequired,
};

export default Statistics;
