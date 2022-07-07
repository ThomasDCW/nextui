import './App.css';
import NextUIButton from './components/button';
import NextUICard from './components/card';
import NextUITrigger from './components/trigger';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Next UI</header>
      <article>
        <NextUIButton />
      </article>
      <article>
        <NextUICard />
      </article>
      <article>
        <NextUITrigger />
      </article>
    </div>
  );
}

export default App;
