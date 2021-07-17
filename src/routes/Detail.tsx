import React from "react"
import Movie from "../components/Movie"

export default function Detail({location:{state}}: any){
    console.log(state)
    return <Movie
        year={state.year}
        title={state.title}
        summary={state.summary}
        poster={state.poster}
        genres={state.genres}
  />
}