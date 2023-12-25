import React, { useState } from 'react';
import { PensionProjectionState, PensionProjectionResult } from './interfaces';
import { CalculatorForm } from './CalculatorForm';
import { ResultsTable } from './ResultsTable';

const PensionProjectionCalculator: React.FC = () => {
  const MAX_CONTRIBUTIONS = 60000;
  const INCOME_THRESHOLD_40_PCT = 50270;
  const TAX_TRAP_THRESHOLD = 100000;

  const [state, setState] = useState<PensionProjectionState>({
    currentAge: 0,
    retirementAge: 0,
    currentSalary: 0,
    employeeContributionPct: 0,
    employerContributionPct: 0,
    currentPensionPot: 0,
    salaryGrowth: 0,
    annualBonus: 0,
    bonusContributionPct: 0,
    avoid40Tax: false,
    avoid100kTaxTrap: false,
  });

  const [results, setResults] = useState<PensionProjectionResult[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === 'checkbox' ? checked : parseFloat(value),
    });
  };

  const calculatePensionProjections = () => {
    const {
      currentAge,
      retirementAge,
      currentSalary: initialSalary,
      employeeContributionPct,
      employerContributionPct,
      currentPensionPot: initialPensionPot,
      salaryGrowth,
      annualBonus,
      bonusContributionPct,
      avoid40Tax,
      avoid100kTaxTrap,
    } = state;

    if (avoid40Tax && avoid100kTaxTrap) {
      alert(
        "Please select only one option between 'Avoid 40% Tax' and 'Avoid £100k tax trap'."
      );
      return;
    }

    let pensionProjectionResults: PensionProjectionResult[] = [];
    let currentPensionPot = initialPensionPot;
    let currentSalary = initialSalary;

    for (let age = currentAge; age <= retirementAge; age++) {
      if (age !== currentAge) {
        currentSalary *= 1 + salaryGrowth / 100;
      }

      let employeeContributionVal =
        (currentSalary * employeeContributionPct) / 100;
      let employerContributionVal =
        (currentSalary * employerContributionPct) / 100;

      let bonusContributionVal = (annualBonus * bonusContributionPct) / 100;
      employeeContributionVal += bonusContributionVal;

      if (avoid40Tax && currentSalary > INCOME_THRESHOLD_40_PCT) {
        let taxableIncome =
          currentSalary + annualBonus - employeeContributionVal;
        if (taxableIncome > INCOME_THRESHOLD_40_PCT) {
          employeeContributionVal += taxableIncome - INCOME_THRESHOLD_40_PCT;
        }
      }

      if (avoid100kTaxTrap && currentSalary > TAX_TRAP_THRESHOLD) {
        let taxableIncome =
          currentSalary + annualBonus - employeeContributionVal;
        if (taxableIncome > TAX_TRAP_THRESHOLD) {
          employeeContributionVal += taxableIncome - TAX_TRAP_THRESHOLD;
        }
      }

      let totalContributions =
        employeeContributionVal + employerContributionVal;

      if (totalContributions > MAX_CONTRIBUTIONS) {
        totalContributions = MAX_CONTRIBUTIONS;
        employeeContributionVal = MAX_CONTRIBUTIONS - employerContributionVal;
      }

      currentPensionPot += totalContributions;

      pensionProjectionResults.push({
        age,
        yearSalary: currentSalary,
        employeeContributionVal,
        employerContributionVal,
        totalContributions,
        updatedPensionPot: currentPensionPot,
        twoPercentGrowth: currentPensionPot * 1.02,
        fourPercentGrowth: currentPensionPot * 1.04,
        sixPercentGrowth: currentPensionPot * 1.06,
      });
    }

    setResults(pensionProjectionResults);
  };

  return (
    <div>
      <h1>UK Pension Projection Calculator</h1>
      <CalculatorForm
        state={state}
        onValueChange={handleChange}
        onCalculate={calculatePensionProjections}
      />
      <ResultsTable results={results} />
    </div>
  );
};

export default PensionProjectionCalculator;
