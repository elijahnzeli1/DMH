import React, { useEffect, useState } from 'react';

interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
}

const MovieMaster: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/movies');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Movie[] = await response.json();
                setMovies(data);
            } catch (error) {
                setError('Error fetching movies');
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <div className="spinner">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="movie-master">
            <h1>MovieMaster</h1>
            <ul className="movie-list">
                {movies.map(movie => (
                    <li key={movie.id} className="movie-item">
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                        <p>Release Date: {movie.releaseDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieMaster;