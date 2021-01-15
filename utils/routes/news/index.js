
const url = process.env.SERVER_URL

export const getNews = `${url}/articles`
export const getNewsItem = id => `${url}/articles/${id}`