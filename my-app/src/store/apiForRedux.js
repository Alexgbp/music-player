import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLike } from './CurrentTrackSlice';
import { refreshTokenUser } from '../api/api';

export const AddLike = createAsyncThunk(
  'track/addLike',
  async function ({id, token, dispatch}) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
   // Тут првоерить статус на 401 и через диспатч вызвать фукцию токен рефреш
   if(response.status === 401){
    refreshTokenUser(token)
   }
    await response.json();
    dispatch(setLike())
  }
);

export const DeleteLike = createAsyncThunk(
  'track/deleteLike',
  async function ({id, token, dispatch}) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(response.status === 401){
      refreshTokenUser(token)
     }
    await response.json();
    dispatch(setLike())
  }
);

