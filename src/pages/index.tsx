import Head from 'next/head'
import Landing from '../components/landing'
import SEOTags from '../components/SEOTags'
import SchemaTags from '../components/SchemaTags'

export const APP_VERSION = 'v1.0.0'

export default function Home(): JSX.Element {
  return (
    <>
      <SEOTags />
      <SchemaTags />
      <Head>
        <title>Owlearn</title>
        <meta
          name="description"
          content="A Decentralized Edtech Platform promoting the mass adoption of Blockchain , Crypto projects and decentralised protocols"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-screen justify-start items-start">
          <Landing />
        </div>
      </main>
    </>
  )
}
