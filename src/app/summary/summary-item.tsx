type Props = {
  label: string;
  value: string;
  emoji: string;
}

export default function SummaryItem({ label, value, emoji }: Props) {
  return (
    <div className="flex sm:flex-row justify-between text-lg">
      <div className="font-bold">{emoji} {label}</div><div>{value}</div>
    </div>
  )
}
