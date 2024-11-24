import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DailyCheckIn from './pages/DailyCheckIn';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Login from './pages/Login';

interface User {
  name: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setUser({ name: 'Ahmed' }); // Set default user data after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/daily-check-in" element={<DailyCheckIn />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;