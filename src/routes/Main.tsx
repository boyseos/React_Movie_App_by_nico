import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import { Link } from "react-router-dom"

class Main extends React.Component<any> {
  state:{isLoading: boolean, movies: []} = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {data: {status} , data: {data: {movies}}} = await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating`)
    const result: Boolean = status === "ok"
    if (result) this.setState({ movies: movies, isLoading: false })
    //result ? this.setState({ movies: movies, isLoading: false }) : null
    console.log(`movies Load ${result}`, movies)
  }
  componentDidMount() {
    this.getMovies()
    //this.setState((cur: any) => cur.isLoading = false)
  }
  render(){
    const { isLoading, movies } = this.state
    console.log("Render", this.state)
    return (
      <section className="container">
        { isLoading ?
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div> :
          <div className="movies">
            { movies.map((movie: any) =>{
              const {year, title, summary, medium_cover_image: poster , genres} = movie,
              {match : {url}} = this.props
              return <Link to={{
                pathname: `${url}/${title}`,
                state: {year, title, summary, poster, genres}
                }}>
              <Movie
                key={title}
                year={year}
                title={title}
                summary={summary}
                poster={poster}
                genres={genres}
              /></Link>}
            )}
          </div>
        }
      </section>)
  }
}

export default Main;
