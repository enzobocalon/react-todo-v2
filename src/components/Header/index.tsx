import React, { useContext, useRef } from 'react';
import * as S from './styles';

import lightMode from '../../assets/icon-sun.svg';
import darkMode from '../../assets/icon-moon.svg';


import Activity from '../Activity';
import { createActivity } from '../../services/createActivity';
import { ActivitiesContext } from '../../context/ActivityContext';
import { getActivities } from '../../services/getActivities';
import { ModesContext } from '../../context/ModesContext';

export function Header() {
  const message = useRef<HTMLInputElement | null>(null);
  const {setActivities, setActive} = useContext(ActivitiesContext);
  const {mode, setMode} = useContext(ModesContext);

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.current) {
      createActivity(message.current.value).then(() => {
        message.current!.value = '';
        setActive(0);
        getActivities().then(response => setActivities(response));
      });
    }
  };

  return (
    <S.Container mode={mode}>
      <S.ContentSection>
        <S.Logo>
          <h1>TODO</h1>
          <img
            src={mode ? lightMode : darkMode}
            onClick={() => setMode(prev => !prev)} />
        </S.Logo>

        <Activity borderRadius={8}>
          <S.Input
            placeholder='Create a new todo...'
            ref={message}
            onKeyPress={e => handleSubmit(e)}
            mode={mode}/>
        </Activity>
      </S.ContentSection>
    </S.Container>
  );
}
