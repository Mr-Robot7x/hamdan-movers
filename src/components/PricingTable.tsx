// MovingTable.tsx
import React from "react";
import { movingData } from "../components/ui/pricingData";

const PricingTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="md:px-4 px-1 py-4 border border-gray-300 text-left">
              Moving Size
            </th>
            <th className="md:px-4 px-1 py-4 border border-gray-300 text-left">
              Moving Trucks Required
            </th>
            <th className="md:px-4 px-1 py-4 border border-gray-300 text-left">
              Crew Size
            </th>
            <th className="md:px-4 px-1 py-4 border border-gray-300 text-left">
              Moving Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {movingData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="md:px-4 px-1 py-4 border border-gray-300">
                {item.size}
              </td>
              <td className="md:px-4 px-1 py-4 border border-gray-300 text-center">
                {item.trucks}
              </td>
              <td className="md:px-4 px-1 py-4 border border-gray-300 text-center">
                {item.crew}
              </td>
              <td className="md:px-4 px-1 py-4 border border-gray-300 text-center">
                {item.cost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
