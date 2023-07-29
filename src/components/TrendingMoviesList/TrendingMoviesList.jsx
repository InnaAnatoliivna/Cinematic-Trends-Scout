import TrendingMoviesListItem from "components/TrendingMoviesListItem/TrendingMoviesListItem";
import css from 'components/TrendingMoviesList/TrendingMoviesList.module.css'

const TrendingMoviesList = ({ arrayResults }) => {
    return (
        <ul className={css.list}>
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