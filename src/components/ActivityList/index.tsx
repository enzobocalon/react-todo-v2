import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getActivities } from '../../services/getActivities';
import { Activity as ActivityType } from '../../types/Activity';
import * as S from './styles';

import { ReactComponent as DeleteIcon } from '../../assets/icon-cross.svg';
import { ModesContext } from '../../context/ModesContext';
import { ActivitiesContext } from '../../context/ActivityContext';
import { deleteActivity } from '../../services/deleteActivity';
import Activity from '../Activity';

export function ActivityList() {
  const {mode} = useContext(ModesContext);
  const {activities, setActivities, active, setActive} = useContext(ActivitiesContext);
  const [displayActivity, setDisplayActivity] = useState<ActivityType[] | null>(null);
  const [counter, setCounter] = useState<number>(0);


  const handleActive = (current: number) => {
    setActive(current);

    if (activities) {
      if (current === 0) {
        setDisplayActivity(activities);
      } else if (current === 1) {
        setDisplayActivity(activities.filter(data => data.status === 0));
      } else {
        setDisplayActivity(activities.filter(data => data.status === 1));
      }
    }
  };

  const handleDelete = async (id: string, canBeDeleted: boolean) => {
    if (!canBeDeleted) {
      alert('Design messages cannot be deleted.');
      return;
    }

    await deleteActivity(id).then(() => {
      getActivities().then(response => setActivities(response));
    });
  };

  const countLeftItems = () => {
    let count = 0;
    if (activities) {
      activities.map(data => {
        if (data.status === 0) {
          count++;
        }
      });
      setCounter(count);
    }
  };

  useEffect(() => {
    setDisplayActivity(activities);
    countLeftItems();
  }, [activities]);

  useEffect(() => {
    getActivities().then((response) => {
      setActivities(response);
      setDisplayActivity(response);
    });
  }, []);

  return (
    <S.Container>
      <S.ListContainer>
        <S.List>
          {
            displayActivity ? displayActivity.map((activity) => (
              <Activity key={activity._id} status={activity.status} id={activity._id}>
                <S.Text>{activity.message}</S.Text>
                <DeleteIcon
                  stroke={mode ? 'hsl(233, 14%, 35%)' : 'hsl(235, 19%, 35%)'}
                  onClick={() => handleDelete(activity._id, activity.isDeletable)}/>
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
            <span>{counter} items left</span>
          </S.FooterContent>

          <S.FooterContent>
            <S.Button
              active={active === 0 ? true : false}
              weight='700'
              onClick={() => handleActive(0)}>
              All
            </S.Button>

            <S.Button
              active={active === 1 ? true : false}
              weight='700'
              onClick={() => handleActive(1)}>
              Active
            </S.Button>

            <S.Button
              active={active === 2 ? true : false}
              weight='700'
              onClick={() => handleActive(2)}>
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
