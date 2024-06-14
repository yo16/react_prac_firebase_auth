import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Secret } from './components/Secret';
import { PublicLayout } from './components/PublicLayout';
import { ProtectedLayout } from './components/ProtectedLayout';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/secret" element={<Secret />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
