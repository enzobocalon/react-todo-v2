import React from 'react';

import lightMode from '../../assets/icon-sun.svg';
import darkMode from '../../assets/icon-moon.svg';

import * as S from './styles';
import Activity from '../Activity';

export function Header() {
  return (
    <S.Container>
      <S.ContentSection>
        <S.Logo>
          <h1>TODO</h1>
          <img src={lightMode} />
        </S.Logo>

        <Activity>
          <S.Input placeholder='Create a new todo...'/>
        </Activity>
      </S.ContentSection>
    </S.Container>
  );
}
