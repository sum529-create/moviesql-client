import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

// client.query({
//     query: gql`
// {
//   allMovies {
//     title
//   }
// }
//     `
// }).then((data) => console.log(data))
// .catch((error) => {
//     console.error('Error:', error);
//     console.error('GraphQL Errors:', error.graphQLErrors);
//     console.error('Network Error:', error.networkError);
// });

export default client;