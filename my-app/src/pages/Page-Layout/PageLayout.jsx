import React from 'react'
import { Outlet } from 'react-router-dom';
import NavMenu from "../../components/navmenu/navMenu"
import { useSelector } from 'react-redux';
import * as S from '../../Global.styled'
import AudioPlayer from '../../components/audioplayer/AudioPlayer'
import SideBar from '../../components/sidebar/Sidebar';
import { shuffleTracks } from '../../store/musicSlice';

export default function PageLayout({user, isLoading}) {
  const currentTrack = useSelector((state) => state.music.currentTrack);
  const isShuffled = useSelector(state => state.music.isShuffle);
  return (
      <>
        <S.GlobalStyle />
        <S.Container>
          <S.Main>
            <NavMenu user={user} />
            <Outlet currentTrack={currentTrack} />
            {currentTrack ? <AudioPlayer track={currentTrack}  shuffleTracks={shuffleTracks} isShuffled={isShuffled} /> : null}
            <SideBar isLoading={isLoading} />
          </S.Main>
          <footer className="footer" />
        </S.Container>
      </>
  )
}
