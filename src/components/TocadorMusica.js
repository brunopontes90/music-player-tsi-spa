import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { Card, CardContent, CardActions, IconButton, Typography, Slider, CardMedia, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';
import { SongContext } from '../App';
import FilaMusica from './FilaMusica';

export default function TocadorMusica({ queue }) {
    const telaGrande = useMediaQuery('(min-width: 900px)');
    const { currentSong, songDispatch } = useContext(SongContext);

    function handlePlaybutton(){
        songDispatch({
            type: currentSong.isPlaying ? "PAUSE_SONG" :  "PLAY_SONG"
        });
    }
    
    return (
        <>
            <Card style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">{currentSong.song.title}</Typography>
                        <Typography variant="subtitle1" component="h3">{currentSong.song.artist}</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><SkipPrevious /></IconButton>
                        <IconButton onClick={handlePlaybutton}>
                            {currentSong.isPlaying? <Pause/> :  <PlayArrow style={{fontSize: '40px'}}/>}
                        </IconButton>
                        <IconButton><SkipNext /></IconButton>
                        <Typography>00:32:17</Typography>
                    </CardActions>
                    <CardMedia style={{ width: '140px', height: '140px' }} image={currentSong.song.thumbnail} />
                </div>
                <Slider type="range" min={0} max={1} step={0.01} style={{ marginLeft: '30px', width: '90%' }} />
            </Card>
            {
                telaGrande && <FilaMusica queue={queue} />
            }
        </>
    )
}