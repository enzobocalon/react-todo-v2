import { useContext, useEffect, useState } from 'react';
import { getActivities } from '../../services/getActivities';
import { Activity as ActivityType } from '../../types/Activity';
import Activity from '../Activity';
import * as S from './styles';

import { ReactComponent as DeleteIcon } from '../../assets/icon-cross.svg';
import { ModesContext } from '../../context/ModesContext';
import { ActivitiesContext } from '../../context/ActivityContext';
import { deleteActivity } from '../../services/deleteActivity';

export function ActivityList() {
  const {mode} = useContext(ModesContext);
  const {activities, setActivities} = useContext(ActivitiesContext);

  const handleDelete = async (id: string) => {
    await deleteActivity(id).then(() => {
      getActivities().then(response => setActivities(response));
    });
  };

  useEffect(() => {
    getActivities().then((response) => {
      setActivities(response);
    });
  }, []);

  return (
    <S.Container>
      <S.ListContainer>
        <S.List>
          {
            activities ? activities.map((activity) => (
              <Activity key={activity._id} status={activity.status} id={activity._id}>
                <S.Text>{activity.message}</S.Text>
                <DeleteIcon
                  stroke={mode ? 'hsl(233, 14%, 35%)' : 'hsl(235, 19%, 35%)'}
                  onClick={() => handleDelete(activity._id)}/>
              </Activity>
            )) : (
              <Activity>
                <S.Text>No activity found.</S.Text>
              </Activity>
            )
          }
        </S.List>

        <S.Footer>
          <S.FooterContent>
            <span>{activities?.length} items left</span> {/* temporary */}
          </S.FooterContent>

          <S.FooterContent>
            <S.Button active={true} weight='700'>
              All
            </S.Button>

            <S.Button weight='700'>
              Active
            </S.Button>

            <S.Button weight='700'>
              Completed
            </S.Button>
          </S.FooterContent>

          <S.FooterContent>
            <S.Button>
              Clear Completed
            </S.Button>
          </S.FooterContent>
        </S.Footer>
      </S.ListContainer>

    </S.Container>
  );
}
