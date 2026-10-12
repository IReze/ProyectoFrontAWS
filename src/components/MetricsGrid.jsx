import React from 'react';
import { Server, Shield, Cpu, KeyRound, CheckCircle2 } from 'lucide-react';

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center justify-between text-slate-400 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider">Aislamiento Backend</span>
          <Server className="w-4 h-4 text-indigo-400" />
        </div>
        <div className="text-lg font-bold text-white">Subred Privada</div>
        <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> 0% IP Pública / Sin IGW
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center justify-between text-slate-400 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider">Perímetro WAF</span>
          <Shield className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-lg font-bold text-white">Protección Activa</div>
        <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
          SQLi + XSS + Rate Limiting
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center justify-between text-slate-400 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider">Hardening de Host</span>
          <Cpu className="w-4 h-4 text-amber-400" />
        </div>
        <div className="text-lg font-bold text-white">UFW & Fail2Ban</div>
        <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Jails Web y SSH Activas
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center justify-between text-slate-400 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider">Zero Trust Auth</span>
          <KeyRound className="w-4 h-4 text-cyan-400" />
        </div>
        <div className="text-lg font-bold text-white">JWT Bearer</div>
        <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
          Validación por cada Request
        </span>
      </div>
    </div>
  );
}