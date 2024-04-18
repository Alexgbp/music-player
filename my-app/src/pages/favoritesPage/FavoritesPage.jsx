import React from 'react';
import * as S from '../../App.styles'
import {  useGetFavoritesTracksQuery } from '../../service/getTracks'
import Tracklist from '../../components/tracklist/Tracklist'
import { useEffect } from 'react';
import { loadTracks } from '../../store/musicSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user'


export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logout } = useUserContext();
    const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery({refetchOnMountOrArgChange: true});

    useEffect(() => {
      if (tracks) {
        dispatch(loadTracks({tracks}));
      }
      
    }, [tracks]);

    if (error && error.status == 401)  {
      logout();
      navigate('/login');
    }
    
    return (
      <>
        <S.Main>
          <Tracklist tracks={tracks} isLoading={isLoading} error={error} playlistId={'favPlaylistId'} showFilters={false} playlistName={'Мои треки'}/>
        </S.Main>
      </>
    )
}