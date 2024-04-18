import React from "react";
import { GlobalStyle } from '../../Global.styled.js';
import * as S from '../../components/otherstyles/variousStyle.style.js';
import  NavMenu  from "../../components/navmenu/navMenu.jsx";
import SearchBlock from "../../components/searchblock/searchBlock.jsx";
// import Filter from "../../components/filter/filter.jsx";
import SideBar from "../../components/sidebar/sideBar.jsx";

export function MyPlayList(){
    return(
        <>
        <GlobalStyle />
        <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu  />
            <S.MainCenterBlock>
              <SearchBlock />
              <S.CenterBlockH2>Мои треки</S.CenterBlockH2> 
              {/* <Filter /> */}
            </S.MainCenterBlock>
            <SideBar/>
          </S.Main>
          <S.FooterBlock />
        </S.Container>
      </S.Wrapper>
        </>
    )
}