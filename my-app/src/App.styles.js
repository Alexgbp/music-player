import styled, { createGlobalStyle } from 'styled-components'
import {
  PlayerBtnRepeat,
  PlayerBtnShuffle,
  TrackPlayLike,
  TrackPlayDislike,
} from './components/player/AudioPlayer.styles'

import { FilterButton } from './components/filter/FilterBlock.styles'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
    }

    *:before,
    *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }

    a,
    a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
    }

    button {
    cursor: pointer;
    }

    ul li {
    list-style: none;
    }

    @font-face {
    font-family: 'StratosSkyeng';
    src:
        local('StratosSkyeng'),
        local('StratosSkyeng'),
        url('./fonts/StratosSkyeng.woff2') format('woff2'),
        url('./fonts/StratosSkyeng.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    }

    html,
    body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #ffffff;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }

    /* ._btn-text:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
    } */

    /* ._btn-icon:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
    } */

    /* ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
    } */

    /* ._btn-icon:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
    } */

    /* ._btn-icon:active .track-play__like-svg,
    ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
    } */
`
export const BtnIcon = styled(PlayerBtnRepeat,PlayerBtnShuffle,TrackPlayLike,TrackPlayDislike)`
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }

  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const BtnText = styled(FilterButton)`
    border-color: ${props => props.$isActive ? "#AD61FF" : '#FFFFFF'};
    color: ${(props) => (props.$isActive ? "#AD61FF" : "#FFFFFF")};
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: ${props => props.$isActive ? "#AD61FF" : "#d9b6ff"};
    color: ${props => props.$isActive ? "#AD61FF" : "#d9b6ff"};
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`
export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  overflow: scroll;
`
export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
