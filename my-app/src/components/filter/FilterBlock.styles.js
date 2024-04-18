import styled from 'styled-components'

export const CentralblockFilter = styled.div`
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
  margin-bottom: 51px;
  justify-content: space-between;
`

export const FilterTitle = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  // margin-right: 15px;
  gap: 15px;
  align-items: center;
`

export const FilterButton = styled.div`
position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  // &:not(:last-child) {
  //   margin-right: 10px;
  // }
`

export const Counter = styled.div`
  color: white;
  background-color: rgb(173, 97, 255);
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`
