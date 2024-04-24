import React from 'react';
import { useDispatch } from 'react-redux';
import { clearStore } from '../store/musicSlice';
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext(null);
export const useUserContext = () => {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/');
  }

  const logout = () => {
    dispatch(clearStore());
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
