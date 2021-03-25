import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "regenerator-runtime/runtime";

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: path.resolve(__dirname, '../.env')});
}

const PORT = process.env.PORT || 5000;

const start = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Hello!')
  })

  await mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_ADMIN_PASSWORD}@medical-waypoints.cmomj.mongodb.net/waypointDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

  app.listen(PORT, () => {
    console.log(`Server at http://localhost:5000${server.graphqlPath}`);
  });
};

start();