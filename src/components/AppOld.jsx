// import { useState } from 'react';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';




// class App extends React.Component {
//     state = {
//           good: 0,
//           neutral: 0,
//           bad: 0,
//       };
  
    
//   handleIncrement = event => {
//     const prevState = event.target.textContent;   
//         this.setState(pastState => ({
//           [prevState]: pastState[prevState] +1,
//         }));
  
//   } 
    
//   countTotalFeedback = () => { 
//     return  this.state.good + this.state.neutral + this.state.bad;
//   }
   
//   countPositiveFeedbackPercentage = () => {
//     return  Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }
  
//   render () {
//     return (
//       <div>
//       <Section title={'Please leave feedback'}>
//       <FeedbackOptions 
//       options={this.state} 
//       onLeaveFeedback={this.handleIncrement}>
//       </FeedbackOptions>
  
//       { this.countTotalFeedback() ?
//       <Statistics 
//       good={this.state.good} 
//       neutral={this.state.neutral} 
//       bad={this.state.bad} 
//       total={this.countTotalFeedback()} 
//       positivePercentage={this.countPositiveFeedbackPercentage()}>  
//       </Statistics> : <Notification message="There is no feedback" />}
//       </Section>
//       </div>
//     );
//   }
//   }
  
//   export { App };