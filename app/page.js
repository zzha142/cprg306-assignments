import Link from "next/link";

export default function Home() {
  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
   <main className="h-screen">
    <h1 className="text-xl">CPRG 306: Web Development2 - Assignments</h1>
    <ul>
      <li><Link className={linkStyles} href="./week-2/">Week 2 Assignments</Link></li>
    </ul>
   </main>
  );
}
