import React, { Component } from 'react';
import { Statistics, FeedbackOptions } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = statsKey => {
    this.setState(prevState => ({ [statsKey]: prevState[statsKey] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round(100 * (this.state.good / this.countTotalFeedback())) || 0;

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    const statsKeys = Object.keys(this.state);

    return (
      <div>
        <FeedbackOptions
          options={statsKeys}
          onLeaveFeedback={this.countFeedback}
        />

        <Statistics
          statsKeys={statsKeys}
          statsData={this.state}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </div>
    );
  }
}
