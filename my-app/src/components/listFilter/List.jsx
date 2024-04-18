import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/musicSlice';
import * as S from './List.styles';

function List({ items, mode }) {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.music);

  const handleFilter = (item) => {
    dispatch(setFilter({ filter: mode, value: item }))
  };
  const unicItems = [...new Set(items)];
  const list = unicItems.map((item, index) => (
    <S.PopupItem onClick={() => handleFilter(item)} key={item+index} $isActive={ filters[mode]?.find((el) => el === item.toLowerCase()) }>
      {item} 
    </S.PopupItem>
  ));
  return (
    <S.PopupBlock>
      <S.PopupContainer>
        <S.Popup>{list}</S.Popup>
      </S.PopupContainer>
    </S.PopupBlock>
  )
}

export default List
