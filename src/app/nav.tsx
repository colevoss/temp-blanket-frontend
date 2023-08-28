import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-950 flex justify-between items-center min-w-screen sticky p-4 md:p-6">
      <Link href="/">
        <h1 className="text-slate-900 dark:text-slate-50 text-lg md:text-2xl font-bold">
          Temperature Blanket
        </h1>
      </Link>

      <Link href="/summary" className="bg-cyan-700 rounded py-1 px-2 text-slate-50 md:py-2 md:px-4 md:text-lg">
        Today
      </Link>
    </nav>
  )
}
