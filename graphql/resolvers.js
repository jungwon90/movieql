
//resolves the Query
//basically programming how we are going to send the response to the user
import {getById, getMovies, addMovie, deleteMovie} from "./db";

const resolvers = {
    //write a resolvers for Query
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;