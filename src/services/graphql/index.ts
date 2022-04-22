/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const serverUrl =
  typeof process !== 'undefined'
    ? process.env.NEXT_PUBLIC_WIDGET_API_URL
    : import.meta.env.VITE_SERVER_URL

console.log(serverUrl)

const API_KEY =
  typeof process !== 'undefined'
    ? process.env.NEXT_PUBLIC_API_KEY
    : import.meta.env.VITE_API_WIDGET_TOKEN

const httpLink = createHttpLink({
  uri: serverUrl as string,
  credentials: 'include',
  headers: {
    authorization: API_KEY,
  },
})

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: serverUrl as string,
  cache: new InMemoryCache(),
  link: httpLink,
})

export default function initializeApollo(): ApolloClient<NormalizedCacheObject> {
  if (typeof window === 'undefined') {
    return client
  }

  if (!apolloClient) {
    apolloClient = client
  }

  return client
}
