// MovingTable.tsx
import { useLocale, useTranslations } from "next-intl";
import React from "react";
export interface MovingData {
  size: string;
  trucks: number;
  crew: string;
  cost: string;
}

const PricingTable: React.FC = () => {
  const t = useTranslations("table");
  const locale = useLocale();

  const movingData: MovingData[] = [
    { size: t("row1.one"), trucks: 1, crew: "3-4", cost: "1000 AED" },
    { size: t("row1.two"), trucks: 1, crew: "4-5", cost: "1200 AED" },
    { size: t("row1.three"), trucks: 2, crew: "5-7", cost: "1500 AED" },
    { size: t("row1.four"), trucks: 2, crew: "6-8", cost: "2000 AED" },
    { size: t("row1.five"), trucks: 3, crew: "8-10", cost: "2500 AED" },
    {
      size: t("row1.six"),
      trucks: 2,
      crew: "6-8",
      cost: "1400 AED",
    },
    {
      size: t("row1.seven"),
      trucks: 3,
      crew: "6-10",
      cost: "2000 AED",
    },
    {
      size: t("row1.eight"),
      trucks: 4,
      crew: "8-10",
      cost: "3000 AED",
    },
  ];

  return (
    <div dir="ltr" className="overflow-x-auto font-poppins">
      <table className="min-w-full rounded-lg table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th
              className={`md:px-4 px-1 py-4 border border-gray-300 ${
                locale === "ar" ? "font-arabic text-right text-xl" : "text-left"
              }`}
            >
              {t("heading1")}
            </th>
            <th
              className={`md:px-4 px-1 py-4 border border-gray-300 ${
                locale === "ar" ? "font-arabic text-right text-xl" : "text-left"
              }`}
            >
              {t("heading2")}
            </th>
            <th
              className={`md:px-4 px-1 py-4 border border-gray-300 ${
                locale === "ar" ? "font-arabic text-right text-xl" : "text-left"
              }`}
            >
              {t("heading3")}
            </th>
            <th
              className={`md:px-4 px-1 py-4 border border-gray-300 ${
                locale === "ar" ? "font-arabic text-right text-xl" : "text-left"
              }`}
            >
              {t("heading4")}
            </th>
          </tr>
        </thead>
        <tbody>
          {movingData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td
                className={`md:px-4 px-1 py-4 border border-gray-300 ${
                  locale === "ar" ? "font-arabic text-right text-lg" : ""
                }`}
              >
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
