/* eslint-disable import/no-extraneous-dependencies */
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const serverUrl = 'http://localhost:4000/graphql'

const httpLink = createHttpLink({
  uri: serverUrl as string,
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'web-platform',
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
