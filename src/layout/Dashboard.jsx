import React , {useState , useEffect} from 'react'
import Albums from '../Components/BrowseSlider/Categories'
import Cards from '../Components/Genre/Cards'
// import Songs from '../Components/SongList/Songs'
import Layout from './Layout'

function Dashboard() {
    const [token, setToken] = useState("");

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
    <Layout>
        <Cards />
        {/* <Songs /> */}
        <Albums />
    </Layout>
  )
}

export default Dashboard