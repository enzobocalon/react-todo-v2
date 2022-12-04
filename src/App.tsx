import { ActivityList } from './components/ActivityList';
import { Header } from './components/Header';
import ModesProvider from './context/ModesContext';
import { GlobalStyle } from './Global';

function App() {


  return (
    <>
      <ModesProvider>
        <Header />
        <ActivityList />
        <GlobalStyle />
      </ModesProvider>
    </>
  );
}

export default App;
