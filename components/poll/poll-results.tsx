import styles from './poll-results.module.scss';
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function PollResults(props) {
  const { poll, results } = props;

  const resultsData : object[] = [];
  poll?.options.forEach(option => {
    let result = {};
    result["option"] = option.text;
    result["votes"] = results[option.id];
    resultsData.push(result);
  })

  return (
    <div className={styles.container}>
      {/* <ul>
        {poll?.options.map(option => (
          <li key={option.id}>
            {option.text}: {results[option.id]} votes
          </li>
        ))}
      </ul> */}
      <ResponsiveContainer width="100%" >
        <BarChart layout="vertical" data={resultsData}>
          <XAxis type="number" hide />
          <YAxis type="category" width={80} dataKey="option" />
          <Bar dataKey="votes" fill="black" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PollResults;
