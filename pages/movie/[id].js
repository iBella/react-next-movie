import { MoviesService } from "../../services/MoviesService";
import Link from 'next/link'

const Movie = ({ movie }) => (
    <div>
        <ul>
            <li>Title: {movie.title}</li>
            <li>Popularity: {movie.popularity}</li>
            <li>budget: {movie.budget}</li>
        </ul>
        <Link href="/" as={"/"}>Voltar</Link>
    </div>
)

export async function getServerSideProps({ params }) {
    const response = await MoviesService.getPopularMovieDetails(params.id);
    const movie = response.data;
  
    return {
      props: {
        movie
      }
    }
  }

export default Movie