import Link from "next/link"

export default function Custom404() {
  return (
    <main>
      <h1>404 - That page does not seem to exist...</h1>
      <iframe
        src="https://giphy.com/embed/wqbAfFwjU8laXMWZ09"
        width="480"
        height="400"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button className="btn-blue">Go Home</button>
      </Link>
    </main>
  )
}
