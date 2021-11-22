import './App.css';
import { DentalAppProvider } from './store';
import OwnerPage from './components/ownerpage/OwnerPage';

function App() {
  return (
    <DentalAppProvider>
    <div className="App">
      <OwnerPage />
    </div>
    </DentalAppProvider>
  );
}

export default App;
