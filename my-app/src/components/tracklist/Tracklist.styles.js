import styled, { css } from 'styled-components'

const PlaylistTitleColMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
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
`
export const CenterblockH = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const Col01 = styled.div`
  ${PlaylistTitleColMixin}
  width: 447px;
`
export const Col02 = styled.div`
  ${PlaylistTitleColMixin}
  width: 321px;
`
export const Col03 = styled.div`
  ${PlaylistTitleColMixin}
  width: 245px;
`
export const Col04 = styled.div`
  ${PlaylistTitleColMixin}
  width: 60px;
  text-align: end;
`
