import React from 'react'
import { Title } from '../Styled'
import "./PlaylistCard.scss";
function PlaylistCard(props) {
  const playlist = props.playlist;
  return (
    <a href={playlist.external_urls.spotify} className="PlaylistCard">
      {playlist.images && <img src={playlist.images[0].url} alt="" />}
      <Title>{playlist.name}</Title>
    </a>
  );
}

export default PlaylistCard