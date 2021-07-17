import React from "react"

interface movieInterface{
    year: number,
    title: string,
    summary: string,
    poster: string,
    genres: string[]
}

function Movie({year, title, summary, poster, genres}: movieInterface){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary}</p>
            <ul className="genres">
                {genres.map( (genre: string, index: number) => (
                    <li className="genres__genre" key={index}> {genre}</li>
            ))}
            </ul>
        </div>
    </div>)
}

export default Movie