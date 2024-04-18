import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Playlist.styles'

function Playlist(props) {

  return (
    <S.SidebarItem>
      <S.SidebarLink id={props.category.id} to={`/category/${props.category.id}`} >
        {props.isLoading ? (
          <S.SkeletonAudioPlayer />
        ) : (
          <S.SidebarImg src={`/${props.category.img}`} alt={props.category.name} />
        )}
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

export default Playlist
