import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk37h4S0BeFMhBAelkbE5he32Om0xw3MTaHD0BCnunubQV9ZukGaUkARoPsaEHVouYxji5POSKjOg6d3mpkvpTjwCGYxpzJNZen1Gs3gkptXyAEtcbHlEvnQPxueBbPap0TMJgn9mpvE1yMIaX1FSwFYAIQalqpr9bcxKBrNy23r1yBrqzFI"
})
