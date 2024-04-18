import React from 'react';
import * as S from '../../components/otherstyles/variousStyle.style.js';
import { GlobalStyle } from "../../Global.styled.js";
import { useParams } from 'react-router-dom';


export function Category() {
  const params  = useParams();

  console.log(params.id);
  return (
    <>
    <GlobalStyle />
     <S.Wrapper>
        <S.Container>
        <S.Main>
          <h1>Playlist</h1>
        </S.Main>
        </S.Container>
    </S.Wrapper>
    </>
  );
}
