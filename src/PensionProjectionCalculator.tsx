import React, { useState, useEffect } from "react";
import { PensionProjectionState, PensionProjectionResult } from "./interfaces";
import { CalculatorForm } from "./CalculatorForm";
import { ResultsTable } from "./ResultsTable";

const PensionProjectionCalculator: React.FC = () => {
    const MAX_CONTRIBUTIONS = 60000;
    const INCOME_THRESHOLD_40_PCT = 50270;
    const TAX_TRAP_THRESHOLD = 100000;

    const initialState: PensionProjectionState = {
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
        avoid100kTaxTrap: false
    };

    const [state, setState] = useState<PensionProjectionState>(() => {
        const localData = localStorage.getItem("pensionState");
        return localData ? JSON.parse(localData) : initialState;
    });

    const [isSidebarVisible, setIsSidebarVisible] = useState(() => {
        const saved = localStorage.getItem("sidebarVisible");
        return saved === null ? true : saved === "true";
    });

    const [results, setResults] = useState<PensionProjectionResult[]>([]);

    useEffect(() => {
        localStorage.setItem("pensionState", JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        localStorage.setItem("sidebarVisible", isSidebarVisible.toString());
    }, [isSidebarVisible]);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : parseFloat(value)
        }));
    };

    const calculatePensionProjections = () => {
        let {
            currentAge,
            retirementAge,
            currentSalary,
            employeeContributionPct,
            employerContributionPct,
            currentPensionPot,
            salaryGrowth,
            annualBonus,
            bonusContributionPct,
            avoid40Tax,
            avoid100kTaxTrap
        } = state;

        // Convert percentage inputs to decimals
        employeeContributionPct /= 100;
        employerContributionPct /= 100;
        bonusContributionPct /= 100;
        salaryGrowth /= 100;

        // Validate inputs
        if (currentAge < 16 || currentAge > 100) {
            alert("Your age should be between 16-100");
            return;
        }

        if (retirementAge < currentAge || retirementAge > 100) {
            alert("Your retirement age should be after your current age and not more than 100");
            return;
        }

        if (currentSalary < 0) {
            alert("You can't have a negative salary!");
            return;
        } else if (currentSalary > 10000000) {
            alert("Salary above £10mil... really?!");
            return;
        }

        if (employeeContributionPct < 0 || employeeContributionPct > 1) {
            alert("Employee Contribution % must be between 0-100.");
            return;
        }

        if (employerContributionPct < 0 || employerContributionPct > 1) {
            alert("Employer Contribution % must be between 0-100.");
            return;
        }

        if (currentPensionPot < 0) {
            alert("You can't have a negative pension pot!");
            return;
        } else if (currentPensionPot > 50000000) {
            alert("Pension pot above £50mil... really?!");
            return;
        }

        if (salaryGrowth > 1) {
            alert("Your salary growth is highly unlikely to more than double every year!");
            return;
        }

        if (isNaN(annualBonus)) {
            annualBonus = 0;
        }

        if (bonusContributionPct < 0 || bonusContributionPct > 1) {
            alert("Bonus Contribution % must be between 0-100.");
            return;
        }

        if (avoid40Tax && avoid100kTaxTrap) {
            alert("Please select only one option between 'Avoid 40% Tax' and 'Avoid £100k tax trap'.");
            return;
        }

        let pensionProjectionResults = [];
        let twoPercentGrowth = currentPensionPot;
        let fourPercentGrowth = currentPensionPot;
        let sixPercentGrowth = currentPensionPot;

        for (let age = currentAge; age <= retirementAge; age++) {
            if (age !== currentAge) {
                currentSalary *= 1 + salaryGrowth;
            }

            let employeeContributionVal = currentSalary * employeeContributionPct;
            let employerContributionVal = currentSalary * employerContributionPct;

            let bonusContributionVal = annualBonus * bonusContributionPct;
            employeeContributionVal += bonusContributionVal;

            if (
                avoid40Tax &&
                currentSalary + annualBonus - employeeContributionVal > INCOME_THRESHOLD_40_PCT
            ) {
                employeeContributionVal = currentSalary + annualBonus - INCOME_THRESHOLD_40_PCT;
            }

            if (
                avoid100kTaxTrap &&
                currentSalary + annualBonus - employeeContributionVal > TAX_TRAP_THRESHOLD
            ) {
                employeeContributionVal = currentSalary + annualBonus - TAX_TRAP_THRESHOLD;
            }

            let totalContributions = employeeContributionVal + employerContributionVal;

            if (totalContributions > MAX_CONTRIBUTIONS) {
                employeeContributionVal = MAX_CONTRIBUTIONS - employerContributionVal;
                totalContributions = MAX_CONTRIBUTIONS;
            }

            currentPensionPot += totalContributions;
            twoPercentGrowth = twoPercentGrowth * 1.02 + totalContributions;
            fourPercentGrowth = fourPercentGrowth * 1.04 + totalContributions;
            sixPercentGrowth = sixPercentGrowth * 1.06 + totalContributions;

            pensionProjectionResults.push({
                age,
                yearSalary: currentSalary,
                employeeContributionVal,
                employerContributionVal,
                totalContributions,
                updatedPensionPot: currentPensionPot,
                twoPercentGrowth,
                fourPercentGrowth,
                sixPercentGrowth
            });
        }

        setResults(pensionProjectionResults);
    };

    const handleClearLocalStorage = (): void => {
        localStorage.removeItem("pensionState");
        setState(initialState);
        setResults([]);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {isSidebarVisible && (
                <div className="w-full md:w-1/4 bg-gray-200 p-4">
                    <CalculatorForm
                        state={state}
                        onValueChange={handleChange}
                        onCalculate={calculatePensionProjections}
                    />

                    <div className="mt-4">
                        <button
                            className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleClearLocalStorage}
                        >
                            Clear info
                        </button>
                    </div>
                </div>
            )}

            <div className={`w-full ${isSidebarVisible ? "md:w-3/4" : "md:w-full"} bg-gray-100 p-4`}>
                <ResultsTable results={results} />
            </div>

            <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 md:top-auto md:right-auto md:bottom-4 md:left-4 z-10 bg-blue-500 text-white p-2 rounded"
                aria-label="Toggle sidebar"
            >
                {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
            </button>
        </div>
    );
};

export default PensionProjectionCalculator;
