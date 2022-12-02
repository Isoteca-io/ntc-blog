import Link from "next/link"

export default function Navbar() {
  const user = null
  const userName = null

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">NTC</button>
          </Link>
        </li>

        {userName && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${userName}`}>
                <img src={user?.photoUrl} />
              </Link>
            </li>
          </>
        )}

        {!userName && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
