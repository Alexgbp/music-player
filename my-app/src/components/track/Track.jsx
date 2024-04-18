import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../service/getTracks'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/user'
import { dislikeTrack, likeTrack } from '../../store/musicSlice'

function Track(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logout } = useUserContext();

  const time = props.track.duration_in_seconds;
  const minutes = Math.trunc(time / 60);
  const seconds = time - minutes * 60;
  const timeTrack = `${minutes <= 9 ? '0' + minutes : minutes}:${
    seconds <= 9 ? '0' + seconds : seconds
  }`;

  const [isLike, setIsLike] = useState(true);
  const [addTrack, { error }] = useAddFavoriteTrackMutation();
  const [deleteTrack, {error: delError}] = useDeleteFavoriteTrackMutation();
  const currentTrack = useSelector((state) => state.music.currentTrack);
  const isPlaying = useSelector((state) => state.music.isPlaying);
  
  const user = JSON.parse(localStorage.getItem('user'));

  if ((error && error.status == 401) || (delError && delError.status == 401))  {
    logout();
    navigate('/login');
  }

  const handleAddTrack = async (e) => {
    e.stopPropagation();
    addTrack({ id: props.track.id });
    dispatch(likeTrack({id: props.track.id}))
    setIsLike(true);
  }

  const handleDeleteTrack = async (e) => {
    e.stopPropagation();
    deleteTrack({ id: props.track.id });
    dispatch(dislikeTrack({id: props.track.id}))
    setIsLike(false);
  }

  useEffect(() => {
    if (props.track.stared_user) {
      const findUser = props.track.stared_user.find((t) => t.email == user);
      const liked = findUser == null ? false : true;
      setIsLike(liked);
    }
  }, [props.track]);

  const toggleLike = isLike ? handleDeleteTrack : handleAddTrack;

  return (
    <S.PlaylistItem onClick={props.onClick}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack != null && props.track.id == currentTrack.id ? (
              <S.Playingdot $isPlaying={isPlaying}></S.Playingdot>
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          {props.isLoading ? (
            <S.SkeletAuthor>
              <Skeleton />
            </S.SkeletAuthor>
          ) : (
            <div>
              <S.TrackTitleLink href="#">
                {props.track.name}
                <S.TrackTitleSpan>
                  {props.track.trackTitlespan}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          )}
        </S.TrackTitle>
        <S.TrackAuthor>
          {props.isLoading ? (
            <S.SkeletBlock>
              <Skeleton />
            </S.SkeletBlock>
          ) : (
            <S.TrackAuthorLink href="#">{props.track.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {props.isLoading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton />
            </SkeletonTheme>
          ) : (
            <S.TrackAlbumLink href={props.track.albumLink}>
              {props.track.album}
            </S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg
            onClick={toggleLike}
            alt="time"
          >
            {isLike ? (<use xlinkHref="/img/icon/sprite.svg#icon-liked" />) : (<use xlinkHref="/img/icon/sprite.svg#icon-like" />)}
          </S.TrackTimeSvg>
          {props.isLoading ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{timeTrack}</S.TrackTimeText>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default Track
