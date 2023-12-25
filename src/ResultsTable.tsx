import React from 'react';
import { PensionProjectionResult } from './interfaces';

interface ResultsTableProps {
  results: PensionProjectionResult[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div>
      <h2>Projection Results</h2>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Salary</th>
            <th>Employee Contribution</th>
            <th>Employer Contribution</th>
            <th>Total Contributions</th>
            <th>Updated Pension Pot</th>
            <th>2% Growth</th>
            <th>4% Growth</th>
            <th>6% Growth</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.age}</td>
              <td>£{result.yearSalary.toFixed(2)}</td>
              <td>£{result.employeeContributionVal.toFixed(2)}</td>
              <td>£{result.employerContributionVal.toFixed(2)}</td>
              <td>£{result.totalContributions.toFixed(2)}</td>
              <td>£{result.updatedPensionPot.toFixed(2)}</td>
              <td>£{result.twoPercentGrowth.toFixed(2)}</td>
              <td>£{result.fourPercentGrowth.toFixed(2)}</td>
              <td>£{result.sixPercentGrowth.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
