export interface PensionProjectionState {
  currentAge: number;
  retirementAge: number;
  currentSalary: number;
  employeeContributionPct: number;
  employerContributionPct: number;
  currentPensionPot: number;
  salaryGrowth: number;
  annualBonus: number;
  bonusContributionPct: number;
  avoid40Tax: boolean;
  avoid100kTaxTrap: boolean;
}

export interface PensionProjectionResult {
  age: number;
  yearSalary: number;
  employeeContributionVal: number;
  employerContributionVal: number;
  totalContributions: number;
  updatedPensionPot: number;
  twoPercentGrowth: number;
  fourPercentGrowth: number;
  sixPercentGrowth: number;
}
