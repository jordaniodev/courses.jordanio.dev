import { useEffect } from "react";
import { GenreResponseProps } from "../interfaces/GenreResponseProps";
import { Button } from "./Button";
import { Logo } from "./Logo";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  isOpen?: boolean;
  closeSidedBar: () => void;
  openSideBar: () => void;
  selectGenre: (genreId: number) => void
}
export function SideBar({ genres, selectedGenreId, selectGenre,isOpen = true,closeSidedBar,openSideBar }: SideBarProps) {
  useEffect(()=>{
    window.onresize = () => {
      if(window.innerWidth <= 900){
        closeSidedBar()
      }else{
        openSideBar()
      }
    };
  })  
  return (isOpen && (<nav className="sidebar">
    <span className="closeButton" onClick={() => closeSidedBar()}>
      X
    </span>
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

  </nav>))
}