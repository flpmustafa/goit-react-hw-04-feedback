import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export default function App() {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);  
const [bad, setBad] = useState(0);  

const handleIncrementGood = () => {
  setGood(good + 1);
}

const handleIncrementNeutral = () => {
  setNeutral(neutral + 1);
}

const handleIncrementBad = () => {
  setBad(bad + 1);
}

const countTotalFeedback = () => { 
  return  good + neutral + bad;
}

const countPositiveFeedbackPercentage = () => {
  return  Math.round((good / countTotalFeedback()) * 100);
}

const optionsFirst = {
  good: '',
  neutral: '',
  bad: '',
};

  return (
    <div>
    <Section title={'Please leave feedback'}>
    <FeedbackOptions 
    options={optionsFirst} 
    handleIncrementGood={handleIncrementGood}
    handleIncrementNeutral={handleIncrementNeutral}
    handleIncrementBad={handleIncrementBad}
    >
    </FeedbackOptions>

    { countTotalFeedback() ?
    <Statistics 
    good={good} 
    neutral={neutral} 
    bad={bad} 
    total={countTotalFeedback()} 
    positivePercentage={countPositiveFeedbackPercentage()}>  
    </Statistics> : <Notification message="There is no feedback" />}
    </Section>
    </div>
  );
}