import { Grid, useMediaQuery } from '@mui/material';
import React, { createContext, useContext, useReducer } from 'react';
import AdicionaMusica from './components/AdicionaMusica';
import Header from './components/Header';
import ListaMusica from './components/ListaMusica';
import TocadorMusica from './components/TocadorMusica';
import { queueReducer, songReducer } from './reducer';

export const SongContext = createContext({
  song: {
    id: '13a1baae-d1e2-4bda-b69f-8a18bca776bc',
    title: 'Radio Ga Ga',
    artist: 'Queen',
    thumbnail: 'http://img.youtube.com/vi/azdwsXLmrHE/0.jpg',
    url: 'https://www.youtube.com/watch?v=azdwsXLmrHE',
    duration: 354,
  },
  isPlaying: false,
});

export default function App() {

  const telaGrande = useMediaQuery('(min-width:900px)');
  const initialSong = useContext(SongContext)
  const [currentQueue, queueDispatch] = useReducer(queueReducer, []);
  const [currentSong, songDispatch] = useReducer(songReducer, initialSong);

  return (
    <SongContext.Provider value={{ currentSong, songDispatch }}>
      <Header />
      <Grid container style={{ marginTop: '80px' }}>
        <Grid item md={7} xs={12} >
          <AdicionaMusica />
          <ListaMusica queue={{ queueDispatch }}/>
        </Grid>
        <Grid
          style={
            telaGrande ?
              { position: 'fixed', width: '100%', right: 0, top: 80 } :
              { position: 'fixed', width: '100%', left: 0, bottom: 10 }
          }
          item md={5} xs={12}>
          <TocadorMusica queue={{ currentQueue, queueDispatch }} />
        </Grid>
      </Grid>
    </SongContext.Provider  >
  );
}
