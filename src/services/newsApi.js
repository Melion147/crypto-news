import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = url => ({
    url,
     headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'c4951cc718msh6764c4d053e29b7p1ac073jsn06565c84d42a'
}})

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=raw&freshness=Day&count=${count}`)
        }),
    })
})

export const {
    useGetNewsQuery,
} = newsApi