import {configureStore} from '@reduxjs/toolkit';
import musicReducer from './musicSlice';
import {getTracks} from '../service/getTracks';

export const store =  configureStore({
    reducer: {
        music: musicReducer,
        [getTracks.reducerPath]: getTracks.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getTracks.middleware)
})