import { CONFIG } from './config'
import { Station } from './networks'

export type DailySummary = {
  high: number;
  low: number;
  average: number;
  date: string;
};

export type WeatherData = {
  station: string,
  time: string,
  tmpf: number,
}

export type SummaryResponse = {
  station: Station,
  summary: DailySummary,
  data: WeatherData[],
}


// const DATE = "20230814";

export async function getDailySummary(
  date: Date,
  stationId: string
): Promise<SummaryResponse> {
  const dateStr = date.toISOString();

  console.log("Requesting summary for date string", dateStr);

  const req = await fetch(
    `${CONFIG.baseURL}/weather/summary?date=${dateStr}&station=${stationId}`
  );

  const res = await req.json();

  if (!req.ok) {
    throw new Error(res.message || "Error Requesting Weather Data")
  }

  return res as SummaryResponse;
}
