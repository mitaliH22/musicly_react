import React from 'react'
import { Title } from '../Styled'
import './Artist.scss';

function Artist(props) {
  const artist = props.artists;
  return (
    <a href={artist.external_urls.spotify} className="artist-card">
      <img src={artist.images[0].url} alt="" />
      <Title color="white">{artist.name}</Title>
      <h4 className="artist-type">{artist.type}</h4>
    </a>
  );
}

export default Artist