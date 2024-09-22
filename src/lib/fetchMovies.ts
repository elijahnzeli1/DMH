import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
}

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'your_api_key_here';

export async function fetchMovies(query: string): Promise<Movie[]> {
    try {
        const response = await axios.get(`${API_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });

        if (response.status !== 200) {
            throw new Error(`Error fetching movies: ${response.statusText}`);
        }

        const movies: Movie[] = response.data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            releaseDate: movie.release_date,
            overview: movie.overview,
            posterPath: movie.poster_path,
        }));

        return movies;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}