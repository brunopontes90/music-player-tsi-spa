import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://desired-lion-49.hasura.app/v1/graphql',
    headers: { 'x-hasura-admin-secret' :  'ZTM347Yb1rP2RoSpFSK4RU1kTUO3c4w7mpB9S0VYQ3lsWCqG2oNJiS2vXhuteHYq' },
    cache: new InMemoryCache(),
});