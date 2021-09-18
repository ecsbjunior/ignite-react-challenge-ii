import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} setSelectedGenre={setSelectedGenre}/>
      <div className="container">
        <Header selectedGenre={selectedGenre}/>
        <Content selectedGenreId={selectedGenreId}/>
      </div>
    </div>
  )
}