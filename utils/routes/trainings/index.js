
const url = process.env.SERVER_URL

export const getTrainings = `${url}/formations`

export const getTraining = id => `${url}/formations/${id}`