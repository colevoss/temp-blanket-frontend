import { getNetworkStations } from "@/api"
import { StationSearch } from "./station-search"

type Props = {
  params: {
    network: string
  }
}

export default async function Network({ params }: Props) {
  const stations = await getNetworkStations(params.network)

  return (
    <StationSearch stations={stations}/>
  )
}
