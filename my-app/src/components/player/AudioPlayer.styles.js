import styled, { css } from 'styled-components'

export const TegAudio = styled.audio`
  display: none;
`;

const PlayerBtnMixin = css`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const Bar = styled.div`
  //position: absolute;
  //выходит за пределы контейнера
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const TrackplayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`
export const TrackPlayLike = styled.div`
  padding: 5px;
`
export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$isLike ? "#fff" : "#696969")};
  &:hover {
    stroke: ${(props) => (props.$isLike ? "#fff" : "#acacac")};
  }
  &:active {
    stroke: ${(props) => (props.$isLike ? "#acacac" : "#fff")};
  }
`
export const TrackPlayDislike = styled.div`
  margin-left: 28.5px;
  padding: 5px;
`

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: ${(props) => (props.$isLike ? "#fff" : "#696969")};
  &:hover {
    stroke: ${(props) => (props.$isLike ? "#fff" : "#acacac")};
  }
  &:active {
    stroke: ${(props) => (props.$isLike ? "#acacac" : "#fff")};
  }
`
export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  cursor: pointer;
  width: 109px;
`

export const VolumeProgressLine = styled.input`
  cursor: pointer;
  width: 109px;

  --progress-height: 8px;
  --progress-color: #ffffff;
  --progress-bg-color: #2e2e2e;

  margin: 0;
  // width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`
export const PlayerBtnPrev = styled.div`
  margin-right: 23px;
  ${PlayerBtnMixin}
`
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`
export const PlayerBtnPlay = styled.div`
    cursor: pointer;
  margin-right: 23px;
  ${PlayerBtnMixin}
`
export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const PlayerBtnNext = styled.div`
  margin-right: 28px;
  fill: #a53939;
  ${PlayerBtnMixin}
`
export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const PlayerBtnRepeat = styled.div`
  margin-right: 24px;
  ${PlayerBtnMixin}
`
export const PlayerBtnRepeatSvg = styled.svg`
  cursor: pointer;
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$isLoop ? "#fff" : "#696969")};
  &:hover {
    stroke: ${(props) => (props.$isLoop ? "#fff" : "#acacac")};
  }
  &:active {
    stroke: ${(props) => (props.$isLoop ? "#acacac" : "#fff")};
  }
`

export const PlayerBtnShuffle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  ${PlayerBtnMixin}
`
export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$isEnabled ? "#fff" : "#696969")};
  &:hover {
    stroke: ${(props) => (props.$isEnabled ? "#fff" : "#acacac")};
  }
  &:active {
    stroke: ${(props) => (props.$isEnabled ? "#acacac" : "#fff")};
  }
`

export const BarPlayerProgress = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`;

export const AudioTrackTime = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #696969;
`;