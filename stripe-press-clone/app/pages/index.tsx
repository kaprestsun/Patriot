import Head from "next/head"
import Header from "../components/Header"
import BookStack  from "../components/Bookstack"
import { app } from "../../lib/firebase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stripe Press | Ideas for progress</title>
        <meta name="description" content="Ideas for progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex flex-col items-center min-h-screen pt-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <BookStack />
        </div>
      </main>
    </>
  )
}