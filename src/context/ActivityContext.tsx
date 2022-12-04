import React, { createContext, useState } from 'react';
import { Activity } from '../types/Activity';

interface IModes {
  activities: Activity[] | null,
  setActivities: React.Dispatch<React.SetStateAction<Activity[] | null>>
}

type ProviderProps = {
  children: React.ReactNode
}

export const ActivitiesContext = createContext({} as IModes);

const ActivitiesProvider = ({children}: ProviderProps) => {
  const [activities, setActivities] = useState<Activity[] | null>(null);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
