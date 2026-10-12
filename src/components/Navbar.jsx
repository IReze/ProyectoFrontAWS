import React from 'react';
import { Shield, LogOut } from 'lucide-react';

export default function Navbar({ user, onLogout }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <span className="font-semibold tracking-tight text-white block leading-none">Sentinel Zero Trust</span>
            <span className="text-[11px] text-slate-400">AWS Distributed Security Architecture</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <span className="text-sm font-medium text-white block leading-tight">{user?.name || user?.username}</span>
            <span className="text-xs text-indigo-400">{user?.role}</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-red-500/10 hover:text-red-400 border border-slate-700/60 transition-colors text-xs font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </header>
  );
}