import React from "react";
import { PensionProjectionResult } from "./interfaces";

interface GrowthModalProps {
    show: boolean;
    onClose: () => void;
    data: PensionProjectionResult | null; // data for the clicked row
}

export const GrowthModal: React.FC<GrowthModalProps> = ({ show, onClose, data }) => {
    if (!show || !data) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div className="bg-white p-6 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h3 className="font-bold text-lg">Growth Details</h3>
                <ul>
                    <li>
                        2% Growth: £
                        {data.twoPercentGrowth.toLocaleString("en-GB", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </li>
                    <li>
                        4% Growth: £
                        {data.fourPercentGrowth.toLocaleString("en-GB", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </li>
                    <li>
                        6% Growth: £
                        {data.sixPercentGrowth.toLocaleString("en-GB", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </li>
                </ul>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};
