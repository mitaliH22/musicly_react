import React, { useEffect, useState } from 'react'
import PlaylistCard from '../Components/Playlists/PlaylistCard';
import { Title } from '../Components/Styled'
import { getPlaylist } from '../spotify';
import Layout from './Layout'

function Playlist() {
    const [playlists, setPlaylist] = useState([]);
    let token = window.localStorage.getItem("token");

    useEffect(() =>{
      if(token !== ''){
        const fetchPlaylist = async() =>{
          try{
            const data = await getPlaylist();
            setPlaylist(data.data.items);
          }catch(e){
            console.log(e);
          }
        }

        fetchPlaylist();
      }
    },[])

  return (
    <Layout>
      <Title>Your playlists</Title>
      <div className="playlist-container">
        {playlists.map((p) => {
          return <PlaylistCard playlist={p} />;
        })}
      </div>
    </Layout>
  );
}

export default Playlist