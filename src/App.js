import './styles.css';
import Card from './components/CardComponent/Main/Card';
import Header from './components/Header/Main/Header';
import AppState from './context/AppState'

export default function App() {
  return (
    <>
      <AppState>
        <Header />
        <Card />
        <footer>created by Sukhpreet Singh - devChallenges.io</footer>
      </AppState>
    </>
  );
}
