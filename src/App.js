import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes} from 'react-router-dom';
import Notes from './Component/Notes/Notes';

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/Notes' Component={Notes} />
    </Routes>
  );
}

export default App;
