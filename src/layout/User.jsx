import React , {useEffect , useState} from 'react'
import Layout from './Layout'
import { getCurrentUserProfile } from "../spotify";
import { Title } from '../Components/Styled';
import { Menu } from '../Components/SideBar/SideBar';


function User(props) {
    const [profile, setProfile] = useState("");
    let token = window.localStorage.getItem("token");

    useEffect(() =>{
      if (token !== '') {
          const fetchData = async () => {
            try {
              const data = await getCurrentUserProfile();
               setProfile(data.data);
            } catch (e) {
              console.error(e);
            }
          };
          fetchData();
        }
        },[])
  return (
    <Layout>
      <div className="user-profile">
        {profile.images && <img src={profile.images[0].url} alt="" />}
        <div>
          <Title color="#ccc">{profile.type}</Title>
          <Title color="white">{profile.display_name}</Title>
          <i class="bi bi-three-dots"></i>
        </div>
      </div>
    </Layout>
  );
}

export default User