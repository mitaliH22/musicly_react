import React, { useEffect, useState } from 'react'
import Artist from '../Components/Artists/Artist';
import { FlexWrapper } from '../Components/Styled';
import { searchArtist } from '../spotify';
import Layout from './Layout';

function Artists() {
    const [ artists , setArtists ] = useState([]);

    useEffect(() =>{
      const fetchArtist = async()=>{
        try{
          const { data } = await searchArtist(
            "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
          );
          setArtists(data.artists);
        } catch(e){
          console.log(e);
        }
      }
      fetchArtist();
    },[]);
  
    return (
      <Layout>
        <FlexWrapper>
          {artists.map((a, i) => {
            return <Artist artists={a} key={i} />;
          })}
        </FlexWrapper>
      </Layout>
    );
}

export default Artists