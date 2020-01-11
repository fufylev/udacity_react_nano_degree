import React from 'react';

const Movie = (props) => {
    const {movie, users, usersLikeMovie} = props;
    return (
        <li key={movie.id}>
            <h2>{movie.name}</h2>
            {!usersLikeMovie
                ? <p>None of the current users liked this movie</p>
                : (
                    <>
                        <p>Liked By:</p>
                        <ul>
                            {usersLikeMovie.map(userId => (
                                <li key={userId}>{users[userId].name}</li>
                            ))}
                        </ul>
                    </>
                )}
        </li>
    );
};

export default Movie;