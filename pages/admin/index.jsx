import Metatags from "../../components/Metatags/Metatags"
import AuthCheck from "../../components/AuthCheck/AuthCheck"

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck>
        <Metatags title="Admin" description="Admin page" />
        <h1>Admin</h1>
      </AuthCheck>
    </main>
  )
}
