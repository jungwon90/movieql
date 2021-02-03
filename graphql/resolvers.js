
//resolves the Query
//basically programming how we are going to send the response to the user
import {getById, getMovies, addMovie} from "./db";

const resolvers = {
    //write a resolvers for Query
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
};

export default resolvers;