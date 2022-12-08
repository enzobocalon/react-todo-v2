/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles';

import check from '../../assets/icon-check.svg';
import { updateStatus } from '../../services/updateActivity';
import { useContext, useState } from 'react';
import { ActivitiesContext } from '../../context/ActivityContext';
import { ModesContext } from '../../context/ModesContext';


interface Props {
  children: React.ReactNode,
  status?: number,
  borderRadius?: number,
  id?: string,
}

function Activity({children, id, status, borderRadius}: Props) {
  const [statusController, setStatusController] = useState(status);
  const {activities, setActivities} = useContext(ActivitiesContext);
  const {mode} = useContext(ModesContext);

  const handleStatusUpdate = () => {
    if (!id) return;

    updateStatus(id, status === 0 ? 1 : 0);
    setStatusController(status === 0 ? 1 : 0);

    const updatedStatus = activities?.map(data => {
      return data._id === id ? {...data, status: status === 0 ? 1 : 0} : data;
    });
    setActivities(updatedStatus!);
  };

  return (
    <S.Container borderRadius={borderRadius} mode={mode}>
      <S.IconBackground
        status={statusController === 1 ? true : false}
        onClick={handleStatusUpdate}
        mode={mode}>
        <S.Icon
          status={statusController === 1 ? true : false}
          mode={mode}>
          {
            statusController === 1 && (
              <img src={check} />
            )
          }
        </S.Icon>
      </S.IconBackground>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
}

export default Activity;
