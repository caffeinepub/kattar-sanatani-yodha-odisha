import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;
