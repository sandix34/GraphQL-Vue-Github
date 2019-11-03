import gql from "graphql-tag";

export const sample = gql`
  query {
    repositoryOwner(login: "sandix34") {
      id
      repositories(
        privacy: PUBLIC
        ownerAffiliations: OWNER
        last: 100
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          node {
            name
            descriptionHTML
            createdAt
            url
          }
        }
      }
    }
  }
`;
