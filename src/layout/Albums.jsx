import React, { useEffect, useState } from 'react'
import AlbumCard from '../Components/AlbumPage/AlbumCard';
import { FlexWrapper, Title } from '../Components/Styled'
import { getAlbums, getMyAlbums } from '../spotify';
import Layout from './Layout'

function Albums() {
    const [ albums , setAlbum] = useState([]);

    useEffect(()=>{
        const fetchAlbums = async() =>{
            try{
                const {data} = await getAlbums(
                    "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
                );
                
                setAlbum(data.albums);
                console.log(data.albums, "albums");
            }catch(e){
                console.log(e)
            }
        }

        fetchAlbums();

        
    }, [])
  return (
    <Layout>
      <Title>Albums</Title>
      <FlexWrapper>
        {albums.map((album) => {
          return <AlbumCard album={album} />;
        })}
      </FlexWrapper>
    </Layout>
  );
}

export default Albums