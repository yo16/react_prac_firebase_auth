import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignUp } from './components/SignUp';
import { AuthProvider } from './AuthContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
