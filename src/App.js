import { HashRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import { Routes } from './routing/Routes';
import { LoaderProvider } from './providers/LoaderProvider';
import { Provider as StateProvider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <StateProvider store={store}>
        <LoaderProvider>
          <Routes />
        </LoaderProvider>
      </StateProvider>
    </Router>
  );
}

export default App;
