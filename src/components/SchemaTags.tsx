import Head from 'next/head'

const SchemaTags = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Course',
            name: 'Owlearn',
            description:
              'A Decentralized Edtech Platform helps people to learn about crypto projects faster',
            image: `https://owlearn/logo.png`, // should be in the public/logo.png
            url: `https://owlearn/`,
            author: {
              '@type': 'Group',
              name: 'Owlearn Team',
            },
            datePublished: '2023-10-01',
            applicationCategory: 'Course',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '12',
            },
            offers: [
              {
                '@type': 'Offer',
                price: 'Free',
                priceCurrency: 'USD',
              },
            ],
          }),
        }}
      ></script>
    </Head>
  )
}

export default SchemaTags
