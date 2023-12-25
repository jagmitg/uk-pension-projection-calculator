import React from "react";
import { PensionProjectionResult } from "./interfaces";

interface ResultsTableProps {
    results: PensionProjectionResult[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
    return (
        <div className="overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">Projection Results</h2>
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-4 text-left font-medium text-gray-600">Age</th>
                        <th className="p-4 text-left font-medium text-gray-600">Salary</th>
                        <th className="p-4 text-left font-medium text-gray-600">Employee Contribution</th>
                        <th className="p-4 text-left font-medium text-gray-600">Employer Contribution</th>
                        <th className="p-4 text-left font-medium text-gray-600">Total Contributions</th>
                        <th className="p-4 text-left font-medium text-gray-600">Updated Pension Pot</th>
                        <th className="p-4 text-left font-medium text-gray-600">2% Growth</th>
                        <th className="p-4 text-left font-medium text-gray-600">4% Growth</th>
                        <th className="p-4 text-left font-medium text-gray-600">6% Growth</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr className="border-b" key={index}>
                            <td className="p-4 text-gray-700">{result.age}</td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.yearSalary.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.employeeContributionVal.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.employerContributionVal.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.totalContributions.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.updatedPensionPot.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.twoPercentGrowth.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.fourPercentGrowth.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                            <td className="p-4 text-gray-700">
                                £
                                {result.sixPercentGrowth.toLocaleString("en-GB", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
