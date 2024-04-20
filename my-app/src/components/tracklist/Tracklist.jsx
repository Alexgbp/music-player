import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, loadTracks } from '../../store/musicSlice'
import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import * as S from './Tracklist.styles'
import Skeleton from 'react-loading-skeleton'
import { useState, useEffect } from 'react'

function Tracklist({ isLoading, tracks, error, playlistId, showFilters, playlistName }) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.music.filters);
  const order = useSelector(state => state.music.order);
  const storedTracks = useSelector(state => state.music.tracks);

  useEffect(() => {
    if (tracks) dispatch(loadTracks({ tracks }));
  }, [tracks]);

  let [filtredTracks, setFiltredTracks] = useState(storedTracks ? storedTracks : []);





  const [searchText, setSearchText] = useState('');

  function filterTracks() {
    if (filters.author?.length) {
      filtredTracks = filtredTracks.filter((track) => filters.author.includes(track.author.toLowerCase()));
    }
    if (filters.genre?.length) {
      filtredTracks = filtredTracks.filter((track) => filters.genre.includes(track.genre.toLowerCase()));
    }

    if (searchText) {
      filtredTracks = filtredTracks.filter((track) => track.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    const defaultOrder = filtredTracks ? [...filtredTracks] : [];
    switch (order.value) {
      case 2:
        // eslint-disable-next-line no-case-declarations
        let x = [...filtredTracks].sort((a, b) => new Date(b.release_date) -  new Date(a.release_date));
        filtredTracks = x;
        break;
      case 3: 
        // eslint-disable-next-line no-case-declarations
        let y = [...filtredTracks].sort((a, b) => new Date(a.release_date) -  new Date(b.release_date))
        filtredTracks = y;
        break;
      default:
        filtredTracks = defaultOrder;
        break;
    }
  }

  useEffect(() => {
    filterTracks(setFiltredTracks(!filtredTracks))
  }, [storedTracks , filters])


  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" value={searchText} onChange={e => setSearchText(e.target.value)}/>
      </S.CenterblockSearch>
      <S.CenterblockH>{playlistName}</S.CenterblockH>
      { showFilters ? (<FilterBlock tracks={tracks ? tracks : []} />) : ('')}
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        {error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже: {error}</p>
        ) : filtredTracks && filtredTracks.length > 0 ? (
          <S.ContentPlaylist>
            {isLoading ? <Skeleton /> : filtredTracks.map((track, index) => {
              return (
                <Track
                  key={`${track.id}${index}`}
                  onClick={() => {
                    dispatch(setCurrentTrack({ id: track.id, playlistId }))
                  }}
                  track={track}
                  isLoading={isLoading}
                  playlistId={playlistId}
                />
              )
            })}
          </S.ContentPlaylist>
        ) : (
          <p>В этом плейтисте нет треков</p>
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default Tracklist
