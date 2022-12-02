import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "../../lib/context"

export default function Navbar() {
  const { user, username } = useContext(UserContext)

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">NTC</button>
          </Link>
        </li>

        {user && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${user}`}>
                <img src={user?.photoUrl} />
              </Link>
            </li>
          </>
        )}

        {!user && (
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
