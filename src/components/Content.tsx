import { GenreResponseProps } from "../interfaces/GenreResponseProps";
import { Movie } from "../interfaces/Movie";
import { Icon } from "./Icon";
import { Loading } from "./Loading";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: Movie[];
  openMenu: (isOpen:boolean) => void;
}
export function Content({ selectedGenre, movies, openMenu }: ContentProps) {
  return (<div className="container">
    <header>
      <Icon name="menu" color="#ffffff" onClick={() => {
        openMenu(true)
        }} />
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className={`movies-list ${(!movies)? 'empty-list':''}`}>
        {(!!movies) ? movies.map((movie:Movie) => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        )) : <Loading />}
      </div>
    </main>
  </div>)
}