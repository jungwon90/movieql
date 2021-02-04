
//resolves the Query
//basically programming how we are going to send the response to the user
import { getMovies } from "./db";

const resolvers = {
    //write a resolvers for Query
    Query: {
        movies: () => getMovies()
    }
};

export default resolvers;