import { getMovies,getSuggestions,getMovie } from './db';

const resolvers = {
    Query: {
        movies: (_:any, {rating, limit}:any) => getMovies(limit, rating),
        movie: (_: any, args: any) => getMovie(args.id),
        suggestions :  (_: any, args: any) => getSuggestions(args.id),
    },

}

export default resolvers;