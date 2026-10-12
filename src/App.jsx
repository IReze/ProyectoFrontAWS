import React, { useState, useEffect } from 'react';
import { Radio } from 'lucide-react';
import LoginView from './components/LoginView';
import Navbar from './components/Navbar';
import MetricsGrid from './components/MetricsGrid';
import AuditLogsTable from './components/AuditLogsTable';
import TokenInspector from './components/TokenInspector';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('zt_token') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('zt_user') || 'null'));
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    if (token) {
      fetchDashboard();
    }
  }, [token]);

  const fetchDashboard = async () => {
    try {
      const res = await fetch('/api/dashboard/data', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return;
      }
      const data = await res.json();
      setDashboardData(data);
    } catch (err) {
      console.error('Error al consultar telemetría:', err);
    }
  };

  const handleLoginSuccess = (newToken, newUser) => {
    localStorage.setItem('zt_token', newToken);
    localStorage.setItem('zt_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('zt_token');
    localStorage.removeItem('zt_user');
    setToken(null);
    setUser(null);
    setDashboardData(null);
  };

  if (!token) {
    return <LoginView onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar user={user} onLogout={handleLogout} />

      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full space-y-8">
        <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Conexión Privada VPC Peering Activa</span>
            </div>
            <h2 className="text-xl font-bold text-white">Consola de Operaciones de Seguridad</h2>
            <p className="text-sm text-slate-400 mt-1">Tráfico validado a través de Nginx Reverse Proxy, AWS WAF y UFW.</p>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
            VPC Backend: 10.17.2.79:3000
          </span>
        </div>

        <MetricsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AuditLogsTable logs={dashboardData?.auditLogs} />
          <TokenInspector token={token} />
        </div>
      </main>
    </div>
  );
}