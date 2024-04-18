import React from 'react';
import { Categories } from '../../constans.js'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCatalogSectionIdQuery } from '../../service/getTracks.js'
import Tracklist from '../../components/tracklist/Tracklist.jsx'
import { useUserContext } from '../../context/user.js'

export const CategoryPage = () => {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const params = useParams()
  const category = Categories.find((c) => c.id === Number(params.id))
  const categoryId = `${category.id}`
  const { data: playlist, isLoading, error } = useGetCatalogSectionIdQuery({id: categoryId});
  
  if (error && error.status == 401)  {
    logout();
    navigate('/login');
  }

  let pl = {
    items: [],
    name: ""
  }

  if (playlist) {
    pl = {...playlist}
  }

  return (
    <div>
      <Tracklist tracks={pl.items} isLoading={isLoading} error={error} playlistId={pl.name} showFilters={false} playlistName={pl.name}></Tracklist>
    </div>
  )
}
