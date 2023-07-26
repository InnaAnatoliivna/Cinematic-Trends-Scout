import { getTrendingMovies } from 'API/api-service';
import Loader from 'components/Loader/Loader';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { useState, useEffect } from 'react';

const Home = () => {

    const [arrayResults, setArrayResults] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            setIsLoader(true);
            setError('');

            try {
                const data = await getTrendingMovies();
                console.log(data.results);
                setArrayResults(data.results);
            }
            catch (error) {
                // setError(error.message);
                console.error(error.message);
            } finally {
                setIsLoader(false);
            }
        }

        fetchTrendingMovies()
    }, [])

    return (
        <div>
            <h2>Trending today</h2>
            {isLoader && <Loader />}
            {arrayResults && <TrendingMoviesList arrayResults={arrayResults} />}
        </div>
    )
}

export default Home;