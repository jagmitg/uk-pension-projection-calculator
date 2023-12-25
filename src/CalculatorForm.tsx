import React from 'react';
import { PensionProjectionState } from './interfaces';

interface CalculatorFormProps {
  state: PensionProjectionState;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCalculate: () => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  state,
  onValueChange,
  onCalculate,
}) => {
  return (
    <form>
      <label>
        Current Age:
        <input
          type="number"
          name="currentAge"
          value={state.currentAge}
          onChange={onValueChange}
        />
      </label>
      <label>
        Current Salary (£):
        <input
          type="number"
          name="currentSalary"
          value={state.currentSalary}
          onChange={onValueChange}
        />
      </label>
      <label>
        Annual Bonus (£):
        <input
          type="number"
          name="annualBonus"
          value={state.annualBonus}
          onChange={onValueChange}
        />
      </label>
      <label>
        % of Bonus to Add to Pension:
        <input
          type="number"
          name="bonusContributionPct"
          value={state.bonusContributionPct}
          onChange={onValueChange}
        />
      </label>
      <label>
        Current Pension Pot (£):
        <input
          type="number"
          name="currentPensionPot"
          value={state.currentPensionPot}
          onChange={onValueChange}
        />
      </label>
      <label>
        Retirement Age:
        <input
          type="number"
          name="retirementAge"
          value={state.retirementAge}
          onChange={onValueChange}
        />
      </label>
      <label>
        Salary Growth (%):
        <input
          type="number"
          name="salaryGrowth"
          value={state.salaryGrowth}
          onChange={onValueChange}
        />
      </label>
      <label>
        Employee Contribution (%):
        <input
          type="number"
          name="employeeContributionPct"
          value={state.employeeContributionPct}
          onChange={onValueChange}
        />
      </label>
      <label>
        Employer Contribution (%):
        <input
          type="number"
          name="employerContributionPct"
          value={state.employerContributionPct}
          onChange={onValueChange}
        />
      </label>
      <label>
        Avoid 40% Tax?
        <input
          type="checkbox"
          name="avoid40Tax"
          checked={state.avoid40Tax}
          onChange={onValueChange}
        />
      </label>
      <label>
        Avoid £100k tax trap
        <input
          type="checkbox"
          name="avoid100kTaxTrap"
          checked={state.avoid100kTaxTrap}
          onChange={onValueChange}
        />
      </label>
      <button type="button" onClick={onCalculate}>
        Calculate
      </button>
    </form>
  );
};
