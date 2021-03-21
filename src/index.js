import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
}

const start = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect(`mongodb+srv://admin:${process.env.REACT_APP_MONGODB_ADMIN_PASSWORD}@medical-waypoints.cmomj.mongodb.net/waypointDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

  app.listen({ port: 5000 }, () => {
    console.log(`Server at http://localhost:5000${server.graphqlPath}`);
  });
};

start();