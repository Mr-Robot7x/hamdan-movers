// movingData.ts
export interface MovingData {
  size: string;
  trucks: number;
  crew: string;
  cost: string;
}

export const movingData: MovingData[] = [
  { size: "Studio apartment", trucks: 1, crew: "3-4", cost: "1000 AED" },
  { size: "1 BHK", trucks: 1, crew: "4-5", cost: "1200 AED" },
  { size: "2 BHK", trucks: 2, crew: "5-7", cost: "1500 AED" },
  { size: "3 BHK", trucks: 2, crew: "6-8", cost: "2000 AED" },
  { size: "4 BHK", trucks: 3, crew: "8-10", cost: "2500 AED" },
  { size: "2 Bedroom Villa Moving", trucks: 2, crew: "6-8", cost: "1400 AED" },
  { size: "3 Bedroom Villa Moving", trucks: 3, crew: "6-10", cost: "2000 AED" },
  { size: "4 Bedroom Villa Moving", trucks: 4, crew: "8-10", cost: "3000 AED" },
];
