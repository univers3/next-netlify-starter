import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Futbala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <img src="futbala_main.png" alt="Futbala" style="width:50%" />

      </main>
    
    </div>
  )
}
