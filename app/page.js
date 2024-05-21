import Link from "next/link";

export default function Home() {
  const linkStyles = "underline hover:text-cyan-600 font-bold text-xl";

  return (
    <main className="h-screen items-center justify-between p-24">
      <h1 className="text-4xl font-bold">CPRG 306: Web Development2 - Assignments</h1>
      <ul>
        <li><Link className={linkStyles} href="./week-2/">Week 2 Assignments</Link></li>
      </ul>
    </main>
  );
}
