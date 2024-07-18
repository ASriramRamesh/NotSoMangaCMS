import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ComicDetails from './pages/ComicDetails';
import BrowseComics from './pages/BrowseComics';
import ReadComic from './pages/ReadComic';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './components/user/Profile';
import ComicManager from './components/admin/ComicManager';
import UserManager from './components/admin/UserManager';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<BrowseComics />} />
                <Route path="/comic/:id" element={<ComicDetails />} />
                <Route path="/read/:comicId/:chapterId" element={<ReadComic />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
                  <Route path="comics" element={<ComicManager />} />
                  <Route path="users" element={<UserManager />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;