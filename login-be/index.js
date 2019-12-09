const express = require('express');
const expressGraphQL = require('express-graphql');
const graphql = require('graphql');
const port = process.env.PORT || 3030;
const cors = require('cors')
const app = express();

const schema = graphql.buildSchema(`
type User {
  name: String
}
type Query {
  user: User
}
`);


const rootResolver = {
  user: () => {
    return {name: "John Doe"};
  },
};

app.use(cors());

app.use('/graphql', expressGraphQL({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  }));
  

app.post('/login', (req, res) => {
    res.status(201).send({message:'salut lume din login'});
});

app.post('/register', (req, res) => {
    res.status(201).send({message:'salut lume din register'});
});

app.get('/user', (req, res) => {
    res.status(201).send({message:'salut lume din user'});
});

app.listen(port, () => {
    console.log('Server is listening on PORT: ' + port);
});