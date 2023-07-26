import TrendingMoviesListItem from "components/TrendingMoviesListItem/TrendingMoviesListItem";

const TrendingMoviesList = ({ arrayResults }) => {
    return (
        <ul>
            {arrayResults.map(movie => {
                return (
                    <TrendingMoviesListItem key={movie.id} movieId={movie.id}>
                        {movie.title}
                    </TrendingMoviesListItem>
                )
            })}
        </ul>
    )
}

export default TrendingMoviesList;