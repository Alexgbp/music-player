import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import * as S from './App.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { UserProvider } from './context/user'

function App() {
  const [user, setUser] = useState(localStorage.getItem('token'));

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <UserProvider>
              <AppRoutes user={user} setUser={setUser} />
            </UserProvider>
          </SkeletonTheme>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
