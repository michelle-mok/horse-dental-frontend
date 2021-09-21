import './App.css';
import Homepage from './components/homepage/Homepage';
import { DentalAppProvider } from './store';

function App() {
  return (
    <DentalAppProvider>
    <div className="App">
      <Homepage />
    </div>
    </DentalAppProvider>
  );
}

export default App;
