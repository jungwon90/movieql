
//resolves the Query
//basically programming how we are going to send the response to the user
import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
    //write a resolvers for Query
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id)
    }
};

export default resolvers;