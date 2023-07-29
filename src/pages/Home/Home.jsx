import { getTrendingMovies } from 'API/api-service';
import Loader from 'components/Loader/Loader';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { useState, useEffect } from 'react';
import css from 'pages/Home/Home.module.css';

const Home = () => {
    const [arrayResults, setArrayResults] = useState(null);
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            setIsLoader(true);
            try {
                const data = await getTrendingMovies();
                setArrayResults(data.results);
            }
            catch (error) {
                console.message(error);
            } finally {
                setIsLoader(false);
            }
        }
        fetchTrendingMovies()
    }, [])

    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Trending today</h2>
            {isLoader && <Loader />}
            {arrayResults && <TrendingMoviesList arrayResults={arrayResults} />}
        </div>
    )
}

export default Home;