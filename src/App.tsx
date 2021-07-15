import React from "react"
import axios from "axios"
import Movie from "./Movie"

class App extends React.Component {
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
            { movies.map((movie: any) =>(
              <Movie
                key={movie.title}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />)
            )}
          </div>
        }
      </section>)
  }
}

export default App;
