import Head from 'next/head'
import Landing from '../components/landing'

export const APP_VERSION = 'v1.0.0'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Owlearn</title>
        <meta
          name="description"
          content="Created with 💜 by web3 enthusiasts"
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
