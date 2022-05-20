import { useEffect, useState } from 'react';
import './App.css'

const COUNTDOWN_INITIAL_TIME_SECONDS = 25 * 60; // 25 minutes

function App() {
  const [secondsAmount, setSecondsAmount] = useState(5);

  useEffect(() => {
    secondsAmount > 0 && setTimeout(() => setSecondsAmount(prevState => prevState - 1), 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="App">
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default App
