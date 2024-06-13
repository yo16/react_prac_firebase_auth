import { SignUp } from './components/SignUp';
import { AuthProvider } from './AuthContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: "2em" }}>
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;
