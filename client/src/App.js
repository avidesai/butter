import './App.css'
import HomePage from './components/HomePage';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>butter</title>
        <meta name="description" content="Bet on the world." />
        <link rel="icon" href="butter.png" />
      </Helmet>
      <HomePage />
    </div>
  );
}

export default App;