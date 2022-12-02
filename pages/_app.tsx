import "../styles/globals.css"
import Navbar from "../components/Navbar/Navbar"

import { GetServerSideProps } from "next"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
