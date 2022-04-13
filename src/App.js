import { HashRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import { Routes } from './routing/Routes';
import { LoaderProvider } from './providers/LoaderProvider';

function App() {
  return (
    <Router>
      <LoaderProvider>
        <Routes />
      </LoaderProvider>
    </Router>
  );
}

export default App;
