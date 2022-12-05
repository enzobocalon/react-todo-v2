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
    if (id) {
      if (status === 0) {
        updateStatus(id, 1);
        setStatusController(1);
        // Its used to control the count when user clicks to check
        const updatedStatus = activities?.map(data => {
          if (data._id === id) {
            return {...data, status: 1};
          }

          return data;
        });
        setActivities(updatedStatus!);
        return;
      }

      if (status === 1) {
        updateStatus(id, 0);
        setStatusController(0);
        // Its used to control the count when user clicks to uncheck
        const updatedStatus = activities?.map(data => {
          if (data._id === id) {
            return {...data, status: 0};
          }

          return data;
        });
        setActivities(updatedStatus!);
        return;
      }
    }
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
