const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql")

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = { description: 'Red Shoe', price: 42.12 }

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root, // GraphQL server will resolve any query of desc/price as the root object.
    graphiql: true
}))

app.listen(3000, () => {
  console.log(`Running GraphQL server on port 3000`);
});
