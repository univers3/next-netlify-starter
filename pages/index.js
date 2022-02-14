import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style="background-image: linear-gradient(to left, rgba(255,255,255,0), rgba(220,220,220,1))">
      <Head>
        <title>Welcome to Futbala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <img src="futbala_main.png" alt="Futbala"/>

      </main>
    
    </div>
  )
}
