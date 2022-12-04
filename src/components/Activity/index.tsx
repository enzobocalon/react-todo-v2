/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles';

import lightMode from '../../assets/icon-cross.svg';
import check from '../../assets/icon-check.svg';
import { updateStatus } from '../../services/updateActivity';
import { useState } from 'react';


interface Props {
  children: React.ReactNode,
  status?: number,
  borderRadius?: number,
  id?: string,
}

function Activity({children, id, status, borderRadius}: Props) {
  const [statusController, setStatusController] = useState(status);

  const handleStatusUpdate = async () => {
    if (id) {
      if (status === 0) {
        updateStatus(id, 1);
        setStatusController(1);
        return;
      }

      if (status === 1) {
        updateStatus(id, 0);
        setStatusController(0);
        return;
      }
    }
  };

  return (
    <S.Container borderRadius={borderRadius}>
      <S.IconBackground
        status={statusController === 1 ? true : false}
        onClick={handleStatusUpdate}>
        <S.Icon status={statusController === 1 ? true : false}>
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
