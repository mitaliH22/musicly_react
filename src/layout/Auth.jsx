import React, { useEffect, useState } from 'react'
import { Title } from '../Components/Styled';
import "./Auth.scss";


function Login() {
    const CLIENT_ID = "f32d7d685abd4624a20f043150dee8fa";
    const REDIRECT_URI = "http://localhost:3000/dash";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [ token , setToken] = useState('');

    useEffect(() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");

      if (!token && hash) {
        token = hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          .split("=")[1];

        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }
      setToken(token);
    }, [token]);


  return (
    <div className="login-wrapper">
      <div className="login-container">
        <Title align='center'>Musicly - Where Music is yours</Title>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className="login"
          >
            Login through Spotify
          </a>
        
      </div>
    </div>
  );
}

export default Login