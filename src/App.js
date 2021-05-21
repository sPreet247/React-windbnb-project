import './styles.css';
import Card from './components/CardComponent/Main/Card';
import Header from './components/Header/Main/Header';
import AppContext from './context/AppContext';
import { useContext } from 'react';

function App() {
  const { searchActive } = useContext(AppContext);
  return (
    <>
      <Header />
      <Card />

      <footer>created by Sukhpreet Singh - devChallenges.io</footer>
    </>
  );
}
export default App;
