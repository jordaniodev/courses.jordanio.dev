import { useEffect, useState } from 'react';


// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { GenreResponseProps } from './interfaces/GenreResponseProps';
import { Movie } from './interfaces/Movie';
import './styles/index.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function selectGenre(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} selectedGenreId={selectedGenreId} selectGenre={selectGenre} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}