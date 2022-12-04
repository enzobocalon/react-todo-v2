import { ActivityList } from './components/ActivityList';
import { Header } from './components/Header';
import ActivitiesProvider from './context/ActivityContext';
import ModesProvider from './context/ModesContext';
import { GlobalStyle } from './Global';

function App() {
  return (
    <>
      <ModesProvider>
        <ActivitiesProvider>
          <Header />
          <ActivityList />
          <GlobalStyle />
        </ActivitiesProvider>
      </ModesProvider>
    </>
  );
}

export default App;
