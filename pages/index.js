import { MoviesService } from "../services/MoviesService";
import Link from 'next/link'

const Index = ({ movies }) => (
  <ul>
    {movies.map( movie => (
      <li key={movie.id}><Link href="/movie/[id]" as={`/movie/${movie.id}`}><a>{movie.title}</a></Link></li>
    ))}
  </ul>
)

Index.getInitialProps = async () => {
  const response = await MoviesService.getPopularMovies();
  const movies = response.data.results;

  return { movies }
}

export default Index
