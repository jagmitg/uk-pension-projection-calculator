import React from "react";
import { PensionProjectionState } from "./interfaces";

interface CalculatorFormProps {
    state: PensionProjectionState;
    onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCalculate: () => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ state, onValueChange, onCalculate }) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Pension Projection Calculator</h2>

            <form>
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label
                                htmlFor="currentAge"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Current Age
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="currentAge"
                                    value={state.currentAge}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="currentSalary"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Current Salary (£):
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="currentSalary"
                                    value={state.currentSalary}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="annualBonus"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Annual Bonus (£):
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="annualBonus"
                                    value={state.annualBonus}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="bonusContributionPct"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                % of Bonus to Pension:
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="bonusContributionPct"
                                    value={state.bonusContributionPct}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="currentPensionPot"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Current Pension Pot (£):
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="currentPensionPot"
                                    value={state.currentPensionPot}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="retirementAge"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Retirement Age:
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="retirementAge"
                                    value={state.retirementAge}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="salaryGrowth"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Salary Growth (%):
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="salaryGrowth"
                                    value={state.salaryGrowth}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="employeeContributionPct"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Employee Contribution (%):
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="employeeContributionPct"
                                    value={state.employeeContributionPct}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="employerContributionPct"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Employer Contribution (%):
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="employerContributionPct"
                                    value={state.employerContributionPct}
                                    onChange={onValueChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="avoid40Tax"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Avoid 40% Tax?
                            </label>
                            <div className="mt-1">
                                <input
                                    type="checkbox"
                                    name="avoid40Tax"
                                    checked={state.avoid40Tax}
                                    onChange={onValueChange}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="avoid100kTaxTrap"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Avoid £100k tax trap
                            </label>
                            <div className="mt-1">
                                <input
                                    type="checkbox"
                                    name="avoid100kTaxTrap"
                                    checked={state.avoid100kTaxTrap}
                                    onChange={onValueChange}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={onCalculate}
                            >
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
