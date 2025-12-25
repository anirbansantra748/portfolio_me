import React, { useState } from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { authAPI } from '../services/api';

export default function AdminOverlay({ children }) {
  const { isAdmin, login, logout } = useAdmin();
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.login('anirbansantra748@gmail.com', password);
      if (response.data.success) {
        login(response.data.token);
        setShowLogin(false);
        setPassword('');
        alert('✅ Admin mode activated!');
      }
    } catch (error) {
      alert('❌ Login failed! Check password in backend/.env');
    }
  };

  const handleLogout = () => {
    logout();
    alert('Logged out');
  };

  return (
    <>
      {children}
      
      {/* Floating Admin Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {!isAdmin ? (
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
          >
            <LogIn size={20} />
            Admin Login
          </button>
        ) : (
          <>
            <div className="px-4 py-2 bg-emerald-500/20 backdrop-blur-xl border-2 border-emerald-500 rounded-full text-emerald-400 font-bold text-sm flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Admin Mode ON
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border-2 border-red-500/50 text-red-400 font-bold rounded-full flex items-center gap-2 transition-all hover:scale-105"
            >
              <LogOut size={16} />
              Logout
            </button>
          </>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && !isAdmin && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowLogin(false)}>
          <div className="bg-[#111] border-2 border-emerald-500/50 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(16,185,129,0.3)]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-white mb-4">🔐 Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <input
                  type="email"
                  value="anirbansantra748@gmail.com"
                  disabled
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-gray-500"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="From backend/.env ADMIN_PASSWORD"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  required
                  autoFocus
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

