import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import toast from "react-hot-toast"

import Loader from "../components/Loader/Loader"

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Loader show /> */}
      <button onClick={() => toast.success("Some test toast")}>
        Test toast
      </button>
    </div>
  )
}
