import React, { useContext, useEffect, useState } from 'react';
import NavMenu from '../../components/navmenu/navMenu.jsx';
import SearchBlock from '../../components/searchblock/searchBlock.jsx';
import SideBar from '../../components/sidebar/Sidebar.jsx';
import AudioPlayer from '../../components/audioplayer/AudioPlayer.jsx';
import Filter from '../../components/filter/filter.jsx';
import TrackList from '../../components/tracklist/Tracklist.jsx';
import { GlobalStyle } from '../../Global.styled.js';
import * as S from '../../components/otherstyles/variousStyle.style.js';
import { getAllTracks } from '../../api/api.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setTrack } from '../../store/CurrentTrackSlice.js';
import { Context } from '../../routes.jsx';
import { shuffleTracks } from '../../store/musicSlice.js';

export function MainPage({ onClick }) {
  const isShuffled = useSelector(state => state.music.isShuffle);
  const { setLoader } = useContext(Context);
  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const [newError, setNewError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTracks()
      .then((data) => {
        setLoader(true);
        dispatch(setTrack(data));
      })
      .catch((error) => {
        setNewError(error.message);
        setLoader(true);
      });
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu onClick={onClick} />
            <S.MainCenterBlock>
              <SearchBlock />
              <S.CenterBlockH2>Треки</S.CenterBlockH2>
              <Filter />
              {newError ? (
                <S.ErrorMessage>{newError}</S.ErrorMessage>
              ) : (
                <TrackList currentTrack={currentTrack} />
              )}
            </S.MainCenterBlock>
            <SideBar onClick={onClick} />
          </S.Main>
          {currentTrack ? <AudioPlayer shuffleTracks={shuffleTracks} isShuffled={isShuffled} currentTrack={currentTrack} /> : null}
          <S.FooterBlock />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
