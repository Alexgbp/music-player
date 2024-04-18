import React from 'react'
import { useState } from 'react'
import * as S from './NavMenu.styles'
import { useUserContext } from '../../context/user'

function OpenMenu({ isOpen }) {
  const { logout } = useUserContext();

  const handleLogout = () => {
    logout();
  }

  if (isOpen) {
    return (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to="/">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.Button onClick={handleLogout}>Выйти</S.Button>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuNav>
    )
  }
  return ''
}

function NavMenu({ user }) {
  const [open, setOpen] = useState(false);

  const toggleVisibility = () => {
    setOpen(!open);
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      <OpenMenu isOpen={open} user={user} />
    </S.MainNav>
  )
}
export default NavMenu
