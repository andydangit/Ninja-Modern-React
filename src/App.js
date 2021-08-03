import Navbar from './Component/Navbar';
import Home from './Component/pages/Home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
    </Router> 
  );
}

export default App;
