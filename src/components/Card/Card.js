import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ movie, user, isFavorite, addFavorite, removeFavorite }) => {
  const handleClick = () => {
    if (!user) {
      // add message "you must login to favorite"
      return;
    }
    if (isFavorite) {
      removeFavorite(user.id, movie.movie_id)
    } else {
      addFavorite(movie, user.id);
    }
  };

  let heart = "far fa-heart"
  if(isFavorite) {
    heart = "fas fa-heart-broken"
  }

  const {
    title,
    release_date,
    overview,
    movie_id,
    poster_path
  } = movie;

  return (
    <div
      className="card"
      key={movie_id}
      style={{ backgroundImage: `URL(${poster_path})` }}
    >
      <button>
        <i className={heart} onClick={handleClick} />
      </button>
      <div>
        <h1>{title}</h1>
        <p>{release_date}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  user: PropTypes.object
};
