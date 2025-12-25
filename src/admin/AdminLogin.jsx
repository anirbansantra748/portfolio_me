import React, { useState } from 'react';
import { authAPI } from '../services/api';

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('anirbansantra748@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authAPI.login(email, password);
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        onLogin(response.data.admin);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-[#111] border border-emerald-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio CMS</h1>
          <p className="text-gray-400 mb-8">Admin Login</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                required
                placeholder="Enter password from .env file"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-gray-500 text-xs mt-6 text-center">
            Password is set in backend/.env file (ADMIN_PASSWORD)
          </p>
        </div>
      </div>
    </div>
  );
}
