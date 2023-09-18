export default function handler(req, res) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId
  const courseAddress = req.query.courseAddress

  const image_url = ''
  // The api is sending back metadata
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    name: 'Progress Tracker #' + tokenId,
    description: 'Progree Tracker for the course',
    image: image_url + tokenId + '.svg',
  })
}
