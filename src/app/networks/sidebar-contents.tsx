'use client';

import { Network } from "@/api"
import { SubHeader } from "@/components/design/sub-header";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type SidebarProps = {
  networks: Network[]
}

const findNetwork = (networks: Network[], networkId: string) => {
  return networks.find(n => n.id === networkId) || null
}

const filterNetworks = (networks: Network[]) => {
  // @ts-ignore
  return networks.filter(n => n.name.toLowerCase().includes('asos')).sort((a, b) => a.name - b.name)
}

export function Sidebar({ networks }: SidebarProps) {
  const params = useParams()
  const router = useRouter()

  const [selected, setSelected] = useState<Network | null>(findNetwork(networks, params.network as string || ''))

  useEffect(() => {
    if (selected === null) {
      return
    }

    if (selected.id === params.network as string) {
      return
    }

    router.push(`/networks/${selected.id}`)
  }, [selected])

  const filteredNetworks = useMemo(() => filterNetworks(networks), [networks])

  return (
    <div className="flex flex-col md:w-1/4 p-6 grow space-y-4 xs:pb-2">
      <label htmlFor="network-select" className="font-light lg:text-lg sm:text-md dark:text-neutral-400 text-neutral-500">Choose a Network</label>
      <select
        id="network-select"
        className="
        bg-neutral-50
        border
        border-neutral-300
        text-neutral-900
        text-sm
        rounded-lg
        focus:ring-cyan-500
        focus:border-cyan-500
        block
        w-full
        p-2
        dark:bg-neutral-700
        dark:border-neutral-600
        dark:placeholder-neutral-400
        dark:text-white
        dark:focus:ring-cyan-500
        dark:focus:border-cyan-500
        "
        value={selected ? selected.id : ""}
        onChange={(e) => {
        if (e.target.value === "") {
          return 
        }

        const network = filteredNetworks.find(n => n.id === e.target.value)

        if (!network) {
          return
        }

        setSelected(network)
      }}>
        <option value="">-- Select Network --</option>
        {filteredNetworks.map((network) => {
          return <option value={network.id} key={network.id}>{network.name}</option>
        })}
      </select>

      {selected && <NetworkDisplay network={selected}/>}
    </div>
  )
}

function NetworkDisplay({ network }: {network: Network}) {
  return (
    <div className="flex flex-col divide-white">
      <h2 className="text-lg border-b border-neutral-400 dark:border-neutral-600 pb-2 mb-6 text-neutral-800 dark:text-neutral-200">{network.name}</h2>

      <div className="flex xs:flex-row md:flex-col md:space-y-6 justify-between">
        <div>
          <SubHeader>ID</SubHeader>
          <p className="dark:text-white text-neutral-800 text-sm">{network.id}</p>
        </div>

        <div>
          <SubHeader>Timezone</SubHeader>
          <p className="dark:text-white text-neutral-900 text-sm">{network.tzname}</p>
        </div>
      </div>
    </div>
  )
}

