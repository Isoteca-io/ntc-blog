// import Link from "next/link"

// export default function PostFeed({ posts, admin }) {
//   return posts ? (
//     <div>
//       {posts.map((post) => (
//         <PostItem post={post} key={post.slug} admin={admin} />
//       ))}
//     </div>
//   ) : null
// }

// function PostItem({ post }) {
//   const wordCount = post?.content.trim().split(/\s+/g).length
//   const minutesToRead = (wordCount / 100 + 1).toFixed(0)

//   return (
//     <div className="card">
//       <Link href={`/${post.username}`}>
//         <strong>By @{post.username}</strong>
//       </Link>
//       <Link href={`/${post.username}/${post.slug}`}>
//         <h2>{post.title}</h2>
//       </Link>

//       <footer>
//         <span>
//           {wordCount} words. {minutesToRead} min read
//         </span>
//         <span className="push-left">❤️ {post.heartCount || 0} Hearts</span>
//       </footer>
//     </div>
//   )
// }

import Link from "next/link"

// Add type definitions for the props object
type Props = {
  posts: {
    title: string
    content: string
    slug: string
    username: string
    heartCount: number
  }[]
  admin?: boolean
}
// Add type definitions for the props object
type PostItemProps = {
  post: {
    title: string
    content: string
    slug: string
    username: string
    heartCount: number
  }
  admin?: boolean
}

// Add types to the PostFeed function
export default function PostFeed({ posts, admin }: Props) {
  return posts ? (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} admin={admin} />
      ))}
    </div>
  ) : null
}

// Add types to the PostItem function
function PostItem({ post }: PostItemProps) {
  const wordCount = post?.content.trim().split(/\s+/g).length
  const minutesToRead = (wordCount / 100 + 1).toFixed(0)

  return (
    <div className="card">
      <Link href={`/${post.username}`}>
        <strong>By @{post.username}</strong>
      </Link>
      <Link href={`/${post.username}/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>

      <footer>
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span className="push-left">❤️ {post.heartCount || 0} Hearts</span>
      </footer>
    </div>
  )
}
