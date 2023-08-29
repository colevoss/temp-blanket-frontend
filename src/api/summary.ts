import { format, isValid } from "date-fns";

export type DailySummary = {
  high: number;
  low: number;
  average: number;
  date: string;
};

// const DATE = "20230814";
const SERVICE_URL = process.env.API_URL || 'http://localhost:8080'

export async function getDailySummary(
  date: Date
): Promise<DailySummary> {
  const dateStr = date.toISOString();

  console.log("Requesting summary for date string", dateStr);

  const req = await fetch(
    `${SERVICE_URL}/weather/summary?date=${dateStr}`
  );

  const res = await req.json();

  if (!req.ok) {
    throw new Error(res.error || "Error Requesting Weather Data")
  }

  return res as DailySummary;
}
