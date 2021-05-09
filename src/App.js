import './styles.css';
import Card from './components/CardComponent/Main/Card';
import Header from './components/Header/Main/Header';
import AppContext from './context/AppContext';
import { useContext } from 'react';

export default function App() {
  const { searchActive } = useContext(AppContext);
  return (
    <>
      {searchActive && <Header />}
      <Card className="backdrop" />
      <footer>created by Sukhpreet Singh - devChallenges.io</footer>
    </>
  );
}
