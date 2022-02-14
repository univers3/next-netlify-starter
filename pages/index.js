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
        <Header title="⚽️ FUTBALA ⚽️" />
        <img src="futbala_logo.png" alt="Futbala" />
        <p className="description">
          The biggest soccer game is coming to town
        </p>
      </main>
    
    </div>
  )
}
