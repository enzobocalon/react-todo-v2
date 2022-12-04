import React, { createContext, useState } from 'react';
import { Activity } from '../types/Activity';

interface IModes {
  activities: Activity[] | null,
  setActivities: React.Dispatch<React.SetStateAction<Activity[] | null>>,
  active: number,
  setActive: React.Dispatch<React.SetStateAction<number>>
}

type ProviderProps = {
  children: React.ReactNode
}

export const ActivitiesContext = createContext({} as IModes);

const ActivitiesProvider = ({children}: ProviderProps) => {
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const [active, setActive] = useState<number>(0);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        active,
        setActive
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
