import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, world</h1>
      <ul>
        <li>
          <Link href="/blog/first-post">First post</Link>
        </li>
        <li>
          <Link href="/blog/second-post">Second post</Link>
        </li>
      </ul>
    </div>
  )
}
