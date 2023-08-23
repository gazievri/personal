import './styles/@globals.sass';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { Footer } from './layout/Footer/Footer';
import { ToTop } from './components/ToTop/ToTop';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;
