## APP: [https://tt0fh.sse.codesandbox.io/graphql](https://tt0fh.sse.codesandbox.io/graphql)  

### CodeSandbox: [https://codesandbox.io/s/node-express-apollo-graphql-jwt-api-tt0fh](https://codesandbox.io/s/node-express-apollo-graphql-jwt-api-tt0fh)

Setup:

```$xslt
npm install
npm start
http://localhost:8000/graphql
```


This code base is for understanding of HTTP, GraphQL, Node.js and general API practices.

Instructions:

1. Implement a Node.js-based server with raw `http`, Koa or Express.
2. Add a `/graphql` endpoint serving the apollo-server or any other GraphQL implementation.
3. Schema must be able to return proper response for the following public query:

```graphql
{
  movies {
    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}
```

4. Add support for the following mutation:
```graphql
mutation createUser($username: String, $password: String) {
  createUser(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}

Input Fields
{
  "username": "",
  "password": ""
}

```

5. To expand on the number four, add a mutation-based authentication that accepts:
```graphql
mutation login($username: String, $password: String) {
  login(username: $username, password: $password) {
    token
    user {
      id
      name
    }
  }
}

Input Fields
{
  "username": "",
  "password": ""
}


HTTP Headers
{
    "Authorization": "Bearer ...Token..."
}
```


6. Authenticated users may request additional fields for the query used earlier. New `scoutbase_rating` field must return the a random string between 5.0-9.0:

```graphql
{
  movies {
    scoutbase_rating

    title
    year
    rating
    actors {
      name
      birthday
      country
      directors {
        name
        birthday
        country
      }
    }
  }
}

HTTP Headers
{
    "Authorization": "Bearer ...Token..."
}
```

7. `/graphql` must be accessible for external clients.

8. End.
