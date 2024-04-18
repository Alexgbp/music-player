import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../store/musicSlice';
import * as S from './orderList.styles';

function OrderList({ items }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.music.order);

  const handleFilter = (item) => {
    dispatch(setOrder({ value: item }))
  };
  const list = items.map((item) => (
    <S.PopupItem onClick={() => handleFilter(item)} key={item.value} $isActive={ order.value == item.value }>
      {item.name} 
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

export default OrderList
