import React from 'react'
import { Title } from '../Styled'
import SongRow from './SongRow';
import './style.scss'
function Songs(props) {
  const songList = props.songs;
  console.log(songList);
  return (
    <div className="container">
      <Title padding='10px 0'>Trending Right Now:</Title>
      <div className="songs">
        <tbody>
          <tr>
            <th>#</th>
            <th>Name Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
          { songList && songList.map((song , index) =>{
            return <SongRow song={song} key={index}/>;
          })}
            
        </tbody>
      </div>
    </div>
  );
}

export default Songs