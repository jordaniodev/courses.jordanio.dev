import { GenreResponseProps } from "../interfaces/GenreResponseProps";
import { Button } from "./Button";
import { Logo } from "./Logo";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  selectGenre: (genreId: number) => void
}
export function SideBar({ genres, selectedGenreId, selectGenre }: SideBarProps) {
  return (<nav className="sidebar">
    <Logo />

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => selectGenre(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>)
}