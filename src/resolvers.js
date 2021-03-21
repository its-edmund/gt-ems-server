import { Waypoint } from './models/Waypoint';

export const resolvers = {
  Query: {
    hello: () => 'hello',
    getWaypoints: () => {
      return Waypoint.find();
    }
  },
  Mutation: {
    createWaypoint: async (_, { long, lat, nature }) => {
      const waypoint = new Waypoint({long, lat, nature});
      await waypoint.save();
      return waypoint;
    }
  }
};