import React, { useState } from "react";
import { PensionProjectionResult } from "./interfaces";
import { GrowthModal } from "./GrowthModal";

interface ResultsTableProps {
    results: PensionProjectionResult[];
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
    const [selectedResult, setSelectedResult] = useState<PensionProjectionResult | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleRowClick = (result: PensionProjectionResult) => {
        setSelectedResult(result);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedResult(null);
    };

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
                        <tr
                            key={index}
                            className="border-b hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleRowClick(result)}
                        >
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
            {selectedResult && (
                <GrowthModal show={showModal} onClose={handleCloseModal} data={selectedResult} />
            )}
        </div>
    );
};
