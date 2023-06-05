import React from "react";
import { Link } from "react-router-dom";
import './SideBar.scss';
import {Sidebar , Options} from "./Styled"

export function Menu(props){

  return (
    <Link to={props.route} className="sidebar-menu" >
      <Options>
        <span className="icons">
          <i className={`bi ${props.iconTitle}`}></i>
        </span>
        {props.menuTitle}
      </Options>
    </Link>
  );
}
function SideBar() {
  return (
    <Sidebar>
      <Menu route="/dash" iconTitle="bi-house-door-fill" menuTitle="Home" />
      <Menu route="/artists" iconTitle="bi-people-fill" menuTitle="Artists" />
      <Menu route="/albums" iconTitle="bi-music-note-list" menuTitle="Albums" />
      <Menu route="/trends" iconTitle="bi-bar-chart-fill" menuTitle="Trends" />
      <Menu
        route="/playlist"
        iconTitle="bi-file-earmark-music-fill"
        menuTitle="Playlist"
      />
      <Menu route="/user" iconTitle="bi-person-fill" menuTitle="Profile" />
    </Sidebar>
  );
}

export default SideBar;
