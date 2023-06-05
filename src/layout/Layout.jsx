import React from 'react'
import MusicPlayer from '../Components/MusicPlayer/MusicPlayer'
import Nav from '../Components/NavBar/Nav'
import SideBar from '../Components/SideBar/SideBar'
import { Container } from '../Components/Styled'

function Layout(props) {
  return (
    <>
    <Nav />
    <SideBar />
    {/* <MusicPlayer /> */}
    <Container>
        {props.children}
    </Container>
    </>
  )
}

export default Layout