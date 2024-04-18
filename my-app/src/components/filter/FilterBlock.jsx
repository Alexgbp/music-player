import React from 'react'
import { useState } from 'react'
import List from '../listFilter/List'
import * as S from './FilterBlock.styles'
import { BtnText } from '../../App.styles'
import { useSelector } from 'react-redux'
import { orderFilter } from '../../constans'
import OrderList from '../orderList/orderList'


function FilterBlock({ tracks }) {

  const filters = useSelector((state) => state.music.filters);
  const order = useSelector((state) => state.music.order);

  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  const authors = tracks?.map((track) => track.author);
  const genres = [...new Set(tracks?.map((track) => track.genre))];

  const auth = filters && filters['author']?.length ? filters['author'] : [];
  const authCount = auth.length;

  const gen = filters && filters['genre']?.length ? filters['genre'] : [];
  const genCount = gen.length;

  return (
    <S.CentralblockFilter>
        <S.FilterTitle>Искать по:
          <BtnText onClick={() => toggleVisibleFilter('author')} $isActive={visibleFilter === 'author' || (authCount > 0)}>
            исполнителю { authCount ? <S.Counter>{authCount > 0 ? authCount : ""}</S.Counter> : ''}
          </BtnText> 
          {visibleFilter === 'author' && <List items={authors} mode={"author"} selectedItems={auth}></List>}

          <BtnText onClick={() => toggleVisibleFilter('genre')} $isActive={visibleFilter === 'genre'|| (genCount > 0)}>
            жанру { genCount ? <S.Counter>{genCount > 0 ? genCount : ""}</S.Counter> : ''}
          </BtnText>
          {visibleFilter === 'genre' && <List items={genres} mode={'genre'} selectedItems={gen}></List>}
        </S.FilterTitle>
      
      <S.FilterTitle>Сортировка:
        <BtnText onClick={() => toggleVisibleFilter('mode')} $isActive={visibleFilter === 'mode'}>
          {order.name} 
        </BtnText> 
        {visibleFilter === 'mode' && <OrderList items={orderFilter}></OrderList>}
      </S.FilterTitle>
    </S.CentralblockFilter>
  )
}

export default FilterBlock
