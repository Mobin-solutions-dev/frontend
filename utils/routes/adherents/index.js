
const url = process.env.SERVER_URL

export const getAdherents = `${url}/adherents`

export const getAdherent = id => `${url}/adherents/${id}`