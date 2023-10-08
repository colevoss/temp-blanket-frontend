import { CONFIG } from "./config";

export type Network = {
  index: number,
  id: string,
  name: string,
  tzname: string,
}

export type Station = {
    index: number;
    id: string;
    synop: number;
    name: string;
    state: string;
    country: string;
    elevation: number;
    network: string;
    online: boolean;
    params: string;
    county: string;
    plot_name: string;
    climate_site: string;
    latitude: number;
    longitude: number;
    tzname: string;
    archive_begin: string;
}

export async function getNetworks(): Promise<Network[]> {
  const req = await fetch(`${CONFIG.baseURL}/networks`)

  const res = await req.json()

  if (!req.ok) {
    console.log(res)
    throw new Error(res.error || "BAD")
  }

  return res as Network[]
}

export async function getNetworkStations(networkId: string): Promise<Station[]>{
  const req = await fetch(`${CONFIG.baseURL}/networks/${networkId}/stations`)

  const res = await req.json()

  if (!req.ok) {
    console.log(res)
    throw new Error(res.error || "BAD")
  }

  return res as Station[];
}
