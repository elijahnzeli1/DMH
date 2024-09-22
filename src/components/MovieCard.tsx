import React from 'react';
import './MovieCard.css';

interface MovieCardProps {
    title: string;
    posterUrl: string;
    releaseDate: string;
    rating: number;
    description: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, releaseDate, rating, description }) => {
    return (
        <div className="movie-card">
            <img src={posterUrl} alt={`${title} poster`} className="movie-card__poster" />
            <div className="movie-card__details">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__release-date">Release Date: {releaseDate}</p>
                <p className="movie-card__rating">Rating: {rating}/10</p>
                <p className="movie-card__description">{description}</p>
            </div>
        </div>
    );
};

export default MovieCard;