import React, { useEffect, useState } from 'react'
import { getCategory } from '../../spotify';
import { Title } from '../Styled'
import Slider from './Slider';

function Categories() {
  const [ categories , setCategory] = useState([]);

  useEffect(() =>{
    const fetchCategory = async() =>{
      try{
        const data = await getCategory();
        setCategory(data.data.categories.items);

      }
      catch(e){
        console.log(e);
      }
    }
    fetchCategory();
    
  },[])
  return (
    <>
      <Title padding="10px 0">Popular Category</Title>
      <Slider categories={categories} />
    </>
  );
}

export default Categories