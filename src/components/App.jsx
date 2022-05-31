import React, { useState } from 'react';
import styled from 'styled-components';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateState = type => setState({ ...state, [type]: state[type] + 1 });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback())
      return Math.round((state.good * 100) / countTotalFeedback());

    return 0;
  };

  return (
    <Wrapper>
      <Section title="Please, leave feedback">
        <FeedbackOptions options={1} onLeaveFeedback={updateState} />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 15px;
`;
