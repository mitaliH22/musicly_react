import React from 'react'
import { Title } from '../Styled'
import "./Album.scss";

function AlbumCard(props) {
    const album = props.album;
  return (
    <>
      <div className="album-card">
        <img src={album.images[0].url} alt="" />
        <Title color="white">{album.name}</Title>
        <Title color="#a7a7a7">{album.artists[0].name}</Title>
      </div>
    </>
  );
}

export default AlbumCard