import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '../Components/Styled'


function Redirect() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() =>{
       if (token !== "") {
         navigate("/dash");
       } else {
         navigate("/");
       }
    })
   
  return (
    <Title>
        You are being redirected to dashboard
    </Title>
  )
}

export default Redirect