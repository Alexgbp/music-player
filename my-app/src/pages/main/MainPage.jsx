import React from 'react';
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { useGetAllTracksQuery } from '../../service/getTracks'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user';


export const MainPage = () => {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const {data: tracks, isLoading, error} = useGetAllTracksQuery();

  if (error && error.status == 401)  {
    logout();
    navigate('/login');
  }

  return (
    <>
      <S.Main>
        <Tracklist tracks={tracks} isLoading={isLoading} error={error} playlistId={'mainPlaylistId'} showFilters={true} playlistName={'Треки'}/>
      </S.Main>
    </>
  )
}
