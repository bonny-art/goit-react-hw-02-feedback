import React, { Component } from 'react';

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

  statsKeys = Object.keys(this.state);

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h1>Please leave feedback</h1>
        {this.statsKeys.map(statsKey => {
          return (
            <button
              type="button"
              key={statsKey}
              onClick={() => this.countFeedback(statsKey)}
            >
              {statsKey}
            </button>
          );
        })}
        <h2>Statistics</h2>
        {this.statsKeys.map(statsKey => {
          return (
            <p key={statsKey}>
              {statsKey}: {this.state[statsKey]}
            </p>
          );
        })}
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedbackPercentage}%</p>
      </div>
    );
  }
}
