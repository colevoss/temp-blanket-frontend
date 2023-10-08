import { Station } from "@/api"
import { ReactNode } from "react"

type Props = {
  stations: Station[]
}

export function StationTable({ stations }: Props) {
  return (
    <table className="text-sm text-left w-full">
      <thead className="bg-gray-50">
        <tr>
          <StationTableHeaderCell>ID</StationTableHeaderCell>
          <StationTableHeaderCell>Name</StationTableHeaderCell>
          <StationTableHeaderCell>County</StationTableHeaderCell>
          <StationTableHeaderCell>Lat</StationTableHeaderCell>
          <StationTableHeaderCell>Lon</StationTableHeaderCell>
          <StationTableHeaderCell>Elevation</StationTableHeaderCell>
          <StationTableHeaderCell>Timezone</StationTableHeaderCell>
        </tr>
      </thead>

      <tbody>
        {stations.map((station) => {
          return (
            <tr key={station.id} className="hover:bg-gray-100">
              <StationTableCell>
                {station.id}
              </StationTableCell>
              <StationTableCell>{station.name}</StationTableCell>
              <StationTableCell>{station.county}</StationTableCell>
              <StationTableCell>{station.latitude}</StationTableCell>
              <StationTableCell>{station.longitude}</StationTableCell>
              <StationTableCell>{station.elevation}</StationTableCell>
              <StationTableCell>{station.tzname}</StationTableCell>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function StationTableCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-1 py-2 border-b border-1">{children}</td>
  )
}

function StationTableHeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-1 py-2 border-b border-1">{children}</th>
  )
}
