import styled from 'styled-components'

export const PopupItem = styled.li`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.$isActive ? "#b672ff" : "FFF" };

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }

  &:active {
    cursor: pointer;
    text-decoration-line: none;
  }
  
`
export const Popup = styled.ul`
  max-height: 180px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 28px;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    background-color: #514e4e;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`
export const PopupContainer = styled.div`
  width: 248px;
  position: absolute;
  background-color: #353333;
  padding: 34px;
  border-radius: 10px;
`
export const PopupBlock = styled.div`
  position: relative;
  right: 110px;
  top: 40px;
`
