import Head from 'next/head'
// import PropTypes from "prop-types";
// import config from "@/config";

const defaults = {
  title: `Owlearn`,
  description:
    'A Decentralized Edtech Platform promoting the mass adoption of Blockchain , Crypto projects and decentralised protocols',
  keywords: `Decentralised, Decentralised-Edtech, Blockchain, Education, Crypto Project  `, //more to add
  og: {
    title: `Owlearn`,
    description: '60 to 180 characters', //need to be updated
    image: `https://needtoupdata/shareMain.png`,
    url: `https://needtoupdata/`,
  },
}

interface TagSEOProps {
  title?: string
  description?: string
  keywords?: string
  og?: {
    title: string
    description: string
    image: string
    url: string
  }
  canonicalSlug?: string
  children?: React.ReactNode
}
// This components should be added to every pages you want to rank on Google (in /pages directory).
// It prefills data with default title/description/OG but you can cusotmize it for each page.
// REQUIRED: The canonicalSlug is required for each page (it's the slug of the page, without the domain name and without the trailing slash)
const SEOTags = ({
  children,
  title,
  description,
  keywords,
  og,
  canonicalSlug,
}: TagSEOProps) => {
  return (
    <Head>
      <title key="title">{title || defaults.title}</title>
      <meta
        name="description"
        key="description"
        content={description || defaults.description}
      />
      <meta
        name="keywords"
        key="keywords"
        content={keywords || defaults.keywords}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaults.og.title} />
      <meta
        property="og:description"
        key="og:description"
        content={defaults.og.description}
      />
      <meta property="og:image" key="og:image" content={defaults.og.image} />
      <meta property="og:url" content={defaults.og.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Owlearn" />
      {/* needs update */}
      {/* CANONICAL TAG */}
      <link
        rel="canonical"
        // href={`https://${config.domainName}/${canonicalSlug}`} //need to update
      />
      {children}
    </Head>
  )
}

export default SEOTags
