# Graphql-Vue-Github

Ceci est un rapide exemple de projet de démonstration utilisant l'API GitHub graphql dans Vue avec vue-apollo pour présenter ses référentiels dans un portfolio par exemple.


## Configuration du projet
```
npm install
```
- Créer un fichier ```.env``` à la racine du projet et coller votre jeton d'authentification github ```VUE_APP_GITHUB_GRAPHQL_AUTH_TOKEN = XXXXXXXXXXXXXXXX```

- Mettre à jour le fichier ```src/queries/sample.js``` avec votre nom d'utilisateur Github.
  
```
import gql from 'graphql-tag'

export const sample = gql`
  query{
    repositoryOwner(login:"YOUR GITHUB USERNAME"){
      id
      repositories(privacy:PUBLIC, ownerAffiliations:OWNER, last:100, orderBy:{field:CREATED_AT, direction:DESC}) {
        edges {
          node {
            name,
            descriptionHTML,
            createdAt,
            url
          }
        }
      }
    }
  }
`

```

### Compile et recharge à chaud pour le développement
```
npm run serve
```

