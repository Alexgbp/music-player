import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../../components/menu/NavMenu';
import Sidebar from '../../components/sidebar/Sidebar';
import * as S from '../../App.styles';
import AudioPlayer from '../../components/player/AudioPlayer';
import { useSelector } from 'react-redux';

const PageLayout = ({ user, isLoading }) => {
  const currentTrack = useSelector((state) => state.music.currentTrack);
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <S.Main>
          <NavMenu user={user} />
          <Outlet currentTrack={currentTrack} />
          {currentTrack ? <AudioPlayer track={currentTrack} /> : null}
          <Sidebar isLoading={isLoading} />
        </S.Main>
        <footer className="footer" />
      </S.Container>
    </>
  )
}

export { PageLayout }
