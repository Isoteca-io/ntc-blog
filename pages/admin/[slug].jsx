// import styles from "../../styles/Admin.module.css"
// import AuthCheck from "../../components/AuthCheck/AuthCheck"
// import { firestore, auth, serverTimestamp } from "../../lib/firebase"

// import { useState } from "react"
// import { useRouter } from "next/router"

// import { useDocumentData } from "react-firebase-hooks/firestore"
// import { useForm } from "react-hook-form"
// import ReactMarkdown from "react-markdown"
// import Link from "next/link"
// import toast from "react-hot-toast"

// export default function AdminPostEdit(props) {
//   return (
//     <AuthCheck>
//       <PostManager />
//     </AuthCheck>
//   )
// }

// function PostManager() {
//   const [preview, setPreview] = useState(false)

//   // Fetch document
//   const router = useRouter()
//   const { slug } = router.query

//   const postRef = firestore
//     .collection("users")
//     .doc(auth.currentUser.uid)
//     .collection("posts")
//     .doc(slug)
//   const [post] = useDocumentData(postRef)

//   return (
//     <main className={styles.container}>
//       {post && (
//         <>
//           <section>
//             <h1>{post.title}</h1>
//             <p>ID: {post.slug}</p>

//             <PostForm postRef={postRef} defaultValues={post} />
//           </section>

//           <aside>
//             <h3>Tools</h3>
//             <button onClick={() => setPreview(!preview)}>
//               {preview ? "Edit" : "Preview"}
//             </button>
//             <Link href={`/${post.username}/${post.slug}`}>
//               <button className="btn-blue">Live view</button>
//             </Link>
//           </aside>
//         </>
//       )}
//     </main>
//   )
// }

// function PostForm({ defaultValues, postRef, preview }) {
//   const { register, handleSubmit, reset, watch } = useForm({
//     defaultValues,
//     mode: "onChange",
//   })

//   const updatePost = async ({ content, published }) => {
//     await postRef.update({
//       content,
//       published,
//       updatedAt: serverTimestamp(),
//     })

//     reset({ content, published })

//     toast.success("Post updated successfully!")
//   }

//   return (
//     <form onSubmit={handleSubmit(updatePost)}>
//       {preview && (
//         <div className="card">
//           <ReactMarkdown>{watch("content")}</ReactMarkdown>
//         </div>
//       )}

//       <div className={preview ? styles.hidden : styles.controls}>
//         <textarea name="content" {...register("content")}></textarea>

//         <fieldset>
//           <input
//             className={styles.checkbox}
//             name="published"
//             type="checkbox"
//             {...register("published", { defaultValues })}
//           />
//           <label>Published</label>
//         </fieldset>

//         <button type="submit" className="btn-green">
//           Save changes
//         </button>
//       </div>
//     </form>
//   )
// }

////////////////////////////////////////

import styles from "../../styles/Admin.module.css"
import AuthCheck from "../../components/AuthCheck/AuthCheck"
import { firestore, auth, serverTimestamp } from "../../lib/firebase"

import { useState } from "react"
import { useRouter } from "next/router"

import { useDocumentData } from "react-firebase-hooks/firestore"
import { useForm } from "react-hook-form"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import toast from "react-hot-toast"

export default function AdminPostEdit(props) {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  )
}

function PostManager() {
  const [preview, setPreview] = useState(false)

  const router = useRouter()
  const { slug } = router.query

  const postRef = firestore
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("posts")
    .doc(slug)
  const [post] = useDocumentData(postRef)

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm
              postRef={postRef}
              defaultValues={post}
              preview={preview}
            />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>
              {preview ? "Edit" : "Preview"}
            </button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button className="btn-blue">Live view</button>
            </Link>
          </aside>
        </>
      )}
    </main>
  )
}

function PostForm({ defaultValues, postRef, preview }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
  })

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    })

    reset({ content, published })

    toast.success("Post updated successfully!")
  }

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <textarea
          name="content"
          {...register("content", { minLength: 10 })}
        ></textarea>
        {errors.content && <p className="text-danger">Content is too short</p>}
        <fieldset>
          <input
            className={styles.checkbox}
            name="published"
            type="checkbox"
            {...register("content", { minLength: 10 })}
          />
          <label>Published</label>
        </fieldset>

        <button
          type="submit"
          className="btn-green"
          disabled={!formState.isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}
