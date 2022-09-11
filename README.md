# GraphQL Guide
## 1. GraphQL Overview
- One endpoint with POST request where the query is the body of the request. Or it can be a GET request with query parameters.
- One endpoint makes the API faster to query.
- GraphQL allows for querying multiple collections of data in one request.
- GraphQL solves the issue of over-fetching and under-fetching of data.
- Under-fetching is when one request is not enough to display the required data on the page.
- Over-fetching is when the server sends unnecessary extra data to the browser. 
- GraphQL query language has its own types to fit many languages.
- Each GraphQL query starts with the type of query we're making: **queries** (get data) or **mutations** (modify data).
- GraphQL `resolvers` are functions that wrap the only data the we need in our query. No more, no less.
- We can query for multiple `types` (Person, Vehicle, Project,...)
- _Query Definition:_
```
type Project {
    name: String
    tagline: String
    contributors: [User]
}
```

_Query the API:_
query {
    project (name: "GrapghQL") {
        tagline
    }
}

_Result:_
{
    "project": {
        name: "GraphQL"
        tagline: "GraphQL is a query language"
    }
}

## 2. GraphQL vs. RESTful APIs
- GraphQL Advantages:
    1. No under-fetching.
    2. No over-fetching.
    3. Schemas and types.
    4. Speeds up development.
    5. Powerful tools by the community.

- GraphQL Disadvantages:
    1. Flexibility and complexity.
    2. Difficult to cache.
    3. Not all people are familiar with it.