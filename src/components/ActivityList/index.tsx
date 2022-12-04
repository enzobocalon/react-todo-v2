import { useEffect, useState } from 'react';
import { getActivities } from '../../services/getActivities';
import { Activity as ActivityType } from '../../types/Activity';
import Activity from '../Activity';
import * as S from './styles';

export function ActivityList() {
  const [activities, setActivities] = useState<ActivityType[] | null>(null);

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
              <Activity key={activity._id} status={activity.status}>
                <S.Text>{activity.message}</S.Text>
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
